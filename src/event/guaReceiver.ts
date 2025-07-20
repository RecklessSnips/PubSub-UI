import type { NewsApi, NewsData } from '@/types/News'
import solace, {
  Message,
  MessageType,
  Session,
  SessionEvent,
  SessionEventCode,
  SessionProperties,
} from 'solclientjs'

/*
这个是 Guaranteed Receiver

这样可以保证只有在点击按钮，明确链接后才会链接，并且每个 Tab 都如此

如果以后想要添加不同用户，那么每一个用户就会独立维持一个链接！

如果同一个用户打开了多个标签页，那么就把当前这个用户的状态放到 Pinia 里，如果已经链接
那么就拒绝新的链接
*/

export default class GuaranteedSubscriber {
  private session: solace.Session | null = null
  private messageSubscriber: solace.MessageConsumer | null = null
  private consuming = false
  private subscribed = false
  private connected = false

  constructor(
    private queueName: string,
    private topicName: string,
    private logFn: (msg: string) => void = console.log,
  ) {}

  private log(msg: string) {
    const now = new Date()
    const timestamp = `[${now.toTimeString().split(' ')[0]}] `
    this.logFn(timestamp + msg)
  }

  public init() {
    if (this.session) {
      this.log('Already initialized!')
      return
    }
    // Initialize factory with the most recent API defaults
    let factoryProps = new solace.SolclientFactoryProperties()
    factoryProps.profile = solace.SolclientFactoryProfiles.version10_5
    solace.SolclientFactory.init(factoryProps)

    // enable logging to JavaScript console at WARN level
    // NOTICE: works only with "solclientjs-debug.js"
    solace.SolclientFactory.setLogLevel(solace.LogLevel.WARN)
  }

  public connect(hostUrl: string, vpn: string, username: string, password: string) {
    if (this.connected) {
      this.log('Already connected')
      return
    }

    this.log(`Connecting to broker at ${hostUrl} as ${username} (VPN: ${vpn})`)

    this.session = solace.SolclientFactory.createSession({
      url: hostUrl,
      vpnName: vpn,
      userName: username,
      password,
    })

    this.session.on(solace.SessionEventCode.UP_NOTICE, () => {
      this.connected = true
      this.log('✅ Connected to broker')
    })

    this.session.on(solace.SessionEventCode.CONNECT_FAILED_ERROR, (event) => {
      this.log(`❌ Connection failed`)
    })

    this.session.on(solace.SessionEventCode.DISCONNECTED, () => {
      this.connected = false
      this.log('🔌 Disconnected from broker')
      this.session?.dispose()
      this.session = null
      this.consuming = false
    })

    this.session.connect()
  }

  public startConsume(
    onMessage: (payload: NewsApi | NewsData, newsSource: string, newsType: string) => void,
  ) {
    if (!this.session) {
      this.log('Session not connected')
      return
    }

    if (this.consuming) {
      this.log('Already consuming')
      return
    }

    this.messageSubscriber = this.session.createMessageConsumer({
      queueDescriptor: { name: this.queueName, type: solace.QueueType.QUEUE },
      acknowledgeMode: solace.MessageConsumerAcknowledgeMode.CLIENT,
      createIfMissing: true,
    })

    this.messageSubscriber.on(solace.MessageConsumerEventName.UP, () => {
      this.log('🚀 Consumer is up and ready')
      this.subscribe()
      this.consuming = true
    })

    /*
      TODO: 在收到信息的时候，判断订阅的信息来源，像 YouTube 那样把来源展示出来
      比如BBC发了什么，如何如何
    */

    this.messageSubscriber.on(solace.MessageConsumerEventName.MESSAGE, (message: Message) => {
      let payload: string

      if (message.getType() === solace.MessageType.TEXT) {
        const sdt = message.getSdtContainer()
        if (sdt !== null) {
          payload = sdt.getValue()
        } else {
          payload = '[Empty SDTContainer]'
        }
      } else {
        const binary = message.getBinaryAttachment()
        payload = binary ? binary.toString() : '[No Binary Data]'
      }

      // 解析 message
      let parsed: NewsApi | NewsData
      try {
        parsed = JSON.parse(payload)
      } catch (e) {
        console.error('❌ JSON parse error:', e, payload)
        return
      }

      // Get the news Type
      const newsType = message.getUserPropertyMap()?.getField('News type').getValue()
      console.log(newsType)
      let newsSource = ''
      if (newsType === 'NewsAPI') {
        const msg = parsed as NewsApi
        console.log(msg)
        // 判断 Source
        if (msg.source.name.toLowerCase().includes('bbc')) {
          newsSource = 'bbc'
        } else if (msg.source.name.toLowerCase().includes('cnn')) {
          newsSource = 'cnn'
        }
      } else if (newsType === 'NewsData') {
        const msg = parsed as NewsData
        console.log(msg)
        // 判断 Source
        if (msg.source_id.toLowerCase().includes('reuters')) {
          newsSource = 'reuters'
        } else if (msg.source_id.toLowerCase().includes('nytimes')) {
          newsSource = 'nytimes'
        } else if (msg.source_id.toLowerCase().includes('economist')) {
          newsSource = 'economist'
        }
      }

      console.log(newsSource)

      // 传递消息给外部回调函数
      if (payload && newsSource) onMessage(parsed, newsSource, newsType)

      this.log(`📩 Received message: ${payload}`)
      message.acknowledge()
    })

    this.messageSubscriber.on(solace.MessageConsumerEventName.CONNECT_FAILED_ERROR, () => {
      this.log('❌ Failed to bind to queue')
    })

    this.messageSubscriber.connect()
  }

  public isConnected(): boolean {
    return this.connected
  }

  public subscribe() {
    if (this.messageSubscriber && !this.subscribed) {
      this.log(`🔔 Subscribing to topic ${this.topicName}`)
      this.messageSubscriber.addSubscription(
        solace.SolclientFactory.createTopicDestination(this.topicName),
        this.topicName,
        10000,
      )
      this.subscribed = true
    }
  }

  public unsubscribe() {
    if (this.messageSubscriber && this.subscribed) {
      this.log(`🔕 Unsubscribing from ${this.topicName}`)
      this.messageSubscriber.removeSubscription(
        solace.SolclientFactory.createTopicDestination(this.topicName),
        this.topicName,
        10000,
      )
      this.subscribed = false
    }
  }

  public stopConsume() {
    if (this.messageSubscriber && this.consuming) {
      this.messageSubscriber.disconnect()
      this.messageSubscriber = null
      this.consuming = false
      this.subscribed = false
      this.log('🛑 Stopped consuming')
    }
  }

  public disconnect() {
    this.unsubscribe()
    setTimeout(() => {
      this.stopConsume()
      this.session?.disconnect()
    }, 1000)
  }
}
