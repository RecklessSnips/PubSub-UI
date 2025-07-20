import solace, {
  Message,
  MessageType,
  Session,
  SessionEvent,
  SessionEventCode,
  SessionProperties,
} from 'solclientjs'

/**
 * 这个是 Direct Receiver，目前没有被使用
 * 调用顺序大概是：
 * subscriber.init()
 * subscriber.setTopicName('news/*')
 * subscriber.connect()
 */

interface Subscriber {
  session: Session | null
  topicName: string
  subscribed: boolean
  log: (line: string) => void
  init: () => void
  connect: () => void
  connectToSolace: () => void
  setTopicName: (topic: string) => void
  subscribe: () => void
  unsubscribe: () => void
  disconnect: () => void
}

const TopicSubscriber = function (): Subscriber {
  const subscriber: Subscriber = {
    session: null,
    topicName: '',
    subscribed: false,

    log: (line: string) => {
      const now = new Date()
      const time = [
        ('0' + now.getHours()).slice(-2),
        ('0' + now.getMinutes()).slice(-2),
        ('0' + now.getSeconds()).slice(-2),
      ]
      const timestamp = '[' + time.join(':') + '] '
      console.log(timestamp + line)
      const logTextArea = document.getElementById('log') as HTMLTextAreaElement | null
      if (logTextArea) {
        logTextArea.value += timestamp + line + '\n'
        logTextArea.scrollTop = logTextArea.scrollHeight
      }
    },

    init: () => {
      // Initialize factory with the most recent API defaults
      let factoryProps = new solace.SolclientFactoryProperties()
      factoryProps.profile = solace.SolclientFactoryProfiles.version10_5
      solace.SolclientFactory.init(factoryProps)

      // enable logging to JavaScript console at WARN level
      // NOTICE: works only with "solclientjs-debug.js"
      solace.SolclientFactory.setLogLevel(solace.LogLevel.WARN)
    },

    connect: () => {
      if (subscriber.session !== null) {
        subscriber.log('Already connected and ready to subscribe.')
        return
      }
      const hosturl = 'wss://mr-connection-pj7lvlk6kp9.messaging.mymaas.net:443'
      const username = 'solace-cloud-client'
      const pass = 'ghl0r9ert82m356hgomr0h16ph'
      const vpn = 'elysra'

      if (!hosturl || !username || !pass || !vpn) {
        subscriber.log(
          'Cannot connect: please specify all the Solace PubSub+ Event Broker properties.',
        )
        return
      }

      subscriber.log(`Connecting to Solace PubSub+ using url: ${hosturl}`)
      subscriber.log(`Client username: ${username}`)
      subscriber.log(`VPN name: ${vpn}`)

      try {
        subscriber.session = solace.SolclientFactory.createSession({
          url: hosturl,
          vpnName: vpn,
          userName: username,
          password: pass,
          connectRetries: 0,
          reconnectRetries: 0,
        })
      } catch (error: any) {
        subscriber.log('Connection error: ')
        subscriber.log(error.toString())
      }

      if (!subscriber.session) return

      subscriber.session.on(SessionEventCode.UP_NOTICE, () => {
        subscriber.log('=== Successfully connected and ready to subscribe. ===')
        // Subscribe after connected
        subscriber.subscribe()
      })

      subscriber.session.on(SessionEventCode.CONNECT_FAILED_ERROR, (event: SessionEvent) => {
        subscriber.log('Connection failed: ' + event.infoStr)
      })

      subscriber.session.on(SessionEventCode.DISCONNECTED, () => {
        subscriber.log('Disconnected.')
        subscriber.subscribed = false
        if (subscriber.session !== null) {
          subscriber.session.dispose()
          subscriber.session = null
        }
      })

      // After subscribe successful
      subscriber.session.on(SessionEventCode.SUBSCRIPTION_OK, (event: SessionEvent) => {
        if (subscriber.subscribed) {
          subscriber.subscribed = false
          subscriber.log('Successfully unsubscribed from topic: ' + event.correlationKey)
        } else {
          subscriber.subscribed = true
          subscriber.log('Successfully subscribed to topic: ' + event.correlationKey)
          subscriber.log('=== Ready to receive messages. ===')
        }
      })

      subscriber.session.on(SessionEventCode.SUBSCRIPTION_ERROR, (event: SessionEvent) => {
        subscriber.log('Subscription error: ' + event.correlationKey)
      })

      // After receive messages
      subscriber.session.on(SessionEventCode.MESSAGE, (message: Message) => {
        if (message.getType() === MessageType.TEXT) {
          const payload = message.getSdtContainer()?.getValue()
          subscriber.log(`Received TextMessage: "${payload}"`)
        } else {
          subscriber.log(`Received binary message: "${message.getBinaryAttachment()}"`)
        }
      })

      subscriber.connectToSolace()
    },

    connectToSolace: () => {
      try {
        subscriber.session?.connect()
      } catch (error: any) {
        subscriber.log(error.toString())
      }
    },

    setTopicName: (newTopic: string) => {
      if (!newTopic || newTopic.trim() === '') {
        subscriber.log('Topic name cannot be empty.')
        return
      }
      subscriber.topicName = newTopic
      subscriber.log(`Topic name set to "${newTopic}"`)
    },

    subscribe: () => {
      if (!subscriber.topicName) {
        subscriber.log('Cannot subscribe: topic name not set.')
        return
      }
      if (subscriber.session && !subscriber.subscribed) {
        try {
          const topic = solace.SolclientFactory.createTopicDestination(subscriber.topicName)
          subscriber.session.subscribe(topic, true, subscriber.topicName, 10000)
          subscriber.subscribed = true
          subscriber.log(`Subscribing to topic "${subscriber.topicName}"`)
        } catch (error: any) {
          subscriber.log(`Subscribe error: ${error.toString()}`)
        }
      } else if (subscriber.subscribed) {
        subscriber.log(`Already subscribed to "${subscriber.topicName}".`)
      } else {
        subscriber.log('Cannot subscribe: not connected.')
      }
    },

    unsubscribe: () => {
      if (!subscriber.topicName) {
        subscriber.log('Cannot unsubscribe: topic name not set.')
        return
      }
      if (subscriber.session && subscriber.subscribed) {
        try {
          const topic = solace.SolclientFactory.createTopicDestination(subscriber.topicName)
          subscriber.session.unsubscribe(topic, true, subscriber.topicName, 10000)
          subscriber.subscribed = false
          subscriber.log(`Unsubscribed from topic "${subscriber.topicName}"`)
        } catch (error: any) {
          subscriber.log(`Unsubscribe error: ${error.toString()}`)
        }
      } else {
        subscriber.log('Cannot unsubscribe: either not subscribed or not connected.')
      }
    },

    disconnect: () => {
      subscriber.log('Disconnecting...')
      try {
        subscriber.session?.disconnect()
      } catch (error: any) {
        subscriber.log(error.toString())
      }
    },
  }

  subscriber.log(`\n*** Subscriber is ready to connect ***`)
  return subscriber
}

export default TopicSubscriber
