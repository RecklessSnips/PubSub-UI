<template>
  <div class="h-full bg-surface-50 dark:bg-surface-950">
    <div
      class="bg-surface-0 dark:bg-surface-900 py-4 px-8 border-b border-surface-200 dark:border-surface-800 flex items-center justify-between relative lg:static"
    >
      <!-- Siderbar -->
      <div class="flex justify-center mr-5">
        <Drawer v-model:visible="visible">
          <template #container="{ closeCallback }">
            <div class="flex flex-col h-full">
              <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                <span class="inline-flex items-center gap-2">
                  <svg
                    width="35"
                    height="40"
                    viewBox="0 0 35 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                      fill="var(--p-primary-color)"
                    />
                    <path
                      d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                      fill="var(--p-text-color)"
                    />
                  </svg>
                  <span class="font-semibold text-2xl text-primary">News PubSub</span>
                </span>
                <span>
                  <Button
                    type="button"
                    @click="closeCallback"
                    icon="pi pi-times"
                    variant="text"
                    rounded
                    outlined
                  ></Button>
                </span>
              </div>
              <div class="overflow-y-auto">
                <ul class="list-none p-4 m-0">
                  <li>
                    <div
                      v-ripple
                      v-styleclass="{
                        selector: '@next',
                        enterFromClass: 'hidden',
                        enterActiveClass: 'animate-slidedown',
                        leaveToClass: 'hidden',
                        leaveActiveClass: 'animate-slideup',
                      }"
                      class="p-4 flex items-center justify-between text-surface-500 dark:text-surface-400 cursor-pointer p-ripple"
                    >
                      <span class="font-medium">Subscriptions</span>
                      <i class="pi pi-chevron-down"></i>
                    </div>
                    <!-- Each Subscription -->
                    <ul class="list-none p-0 m-0 overflow-hidden">
                      <li>
                        <RouterLink
                          to="/subscription"
                          @click="visible = false"
                          v-ripple
                          class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                        >
                          <i class="pi pi-book mr-2"></i>
                          <span class="font-medium">Subscriptions</span>
                        </RouterLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="mt-auto">
                <hr
                  class="mb-4 mx-4 border-t border-0 border-surface-200 dark:border-surface-700"
                />
                <!-- Redirect to User's page -->
                <!-- <a
                  v-ripple
                  class="m-4 flex items-center cursor-pointer p-4 gap-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                >
                  <Avatar
                    image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                    shape="circle"
                  />
                  <span class="font-bold">Amy Elsner</span>
                </a> -->
              </div>
            </div>
          </template>
        </Drawer>
        <!-- Sidebar button -->
        <Button
          icon="pi pi-bars"
          rounded
          severity="contrast"
          variant="text"
          @click="visible = true"
        />
      </div>

      <!-- Icon -->
      <div class="flex items-center gap-4 py-2">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.84219 2.87829C5.69766 3.67858 4.6627 4.62478 3.76426 5.68992C7.4357 5.34906 12.1001 5.90564 17.5155 8.61335C23.2984 11.5047 27.955 11.6025 31.1958 10.9773C30.9017 10.087 30.5315 9.23135 30.093 8.41791C26.3832 8.80919 21.6272 8.29127 16.0845 5.51998C12.5648 3.76014 9.46221 3.03521 6.84219 2.87829ZM27.9259 5.33332C24.9962 2.06 20.7387 0 16 0C14.6084 0 13.2581 0.177686 11.9709 0.511584C13.7143 0.987269 15.5663 1.68319 17.5155 2.65781C21.5736 4.68682 25.0771 5.34013 27.9259 5.33332ZM31.8887 14.1025C27.9735 14.8756 22.567 14.7168 16.0845 11.4755C10.024 8.44527 5.20035 8.48343 1.94712 9.20639C1.7792 9.24367 1.61523 9.28287 1.45522 9.32367C1.0293 10.25 0.689308 11.2241 0.445362 12.2356C0.705909 12.166 0.975145 12.0998 1.25293 12.0381C5.19966 11.161 10.7761 11.1991 17.5155 14.5689C23.5761 17.5991 28.3997 17.561 31.6529 16.838C31.7644 16.8133 31.8742 16.7877 31.9822 16.7613C31.9941 16.509 32 16.2552 32 16C32 15.358 31.9622 14.7248 31.8887 14.1025ZM31.4598 20.1378C27.5826 20.8157 22.3336 20.5555 16.0845 17.431C10.024 14.4008 5.20035 14.439 1.94712 15.1619C1.225 15.3223 0.575392 15.5178 0.002344 15.7241C0.000781601 15.8158 0 15.9078 0 16C0 24.8366 7.16344 32 16 32C23.4057 32 29.6362 26.9687 31.4598 20.1378Z"
            class="fill-surface-900 dark:fill-surface-0"
          />
        </svg>
        <RouterLink to="/" class="text-xl font-medium text-surface-900 dark:text-surface-0"
          >NewsPubSub</RouterLink
        >
      </div>

      <!-- The rest -->
      <div
        class="items-center grow justify-between hidden lg:flex absolute lg:static w-full bg-surface-0 dark:bg-surface-900 left-0 top-full px-12 lg:px-0 z-50 shadow lg:shadow-none"
      >
        <!-- Middle, different News sources -->
        <ul
          class="list-none p-0 py-4 lg:py-0 m-0 flex grow lg:items-center lg:justify-center text-surface-900 dark:text-surface-0 select-none flex-col lg:flex-row cursor-pointer"
        >
          <li class="relative">
            <RouterLink
              to="/bbc"
              class="flex px-0 lg:px-8 py-2 items-center hover:text-primary font-medium transition-colors duration-150"
            >
              <span>BBC</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/nytimes"
              class="flex px-0 lg:px-8 py-2 hover:text-primary font-medium transition-colors duration-150"
            >
              <span>NY Times</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/reuters"
              class="flex px-0 lg:px-8 py-2 hover:text-primary font-medium transition-colors duration-150"
            >
              <span>Reuters</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/cnn"
              class="flex px-0 lg:px-8 py-2 hover:text-primary font-medium transition-colors duration-150"
            >
              <span>CNN</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/economist"
              class="flex px-0 lg:px-8 py-2 hover:text-primary font-medium transition-colors duration-150"
            >
              <span>Economist</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to=""
              class="flex px-0 lg:px-8 py-2 hover:text-primary font-medium transition-colors duration-150"
            >
              <span>Doc</span>
            </RouterLink>
          </li>
        </ul>

        <!-- Buttons -->
        <div
          class="flex items-center border-t lg:border-t-0 border-surface py-4 lg:py-2 mt-0 lg:mt-0 gap-3"
        >
          <!-- Dark Mode button -->
          <Button
            icon="pi pi-sun"
            aria-label="Save"
            outlined
            @click="toggleDarkMode()"
            size="small"
            style="--p-button-sm-padding-x: 0.25rem"
          />

          <!-- API Selector 不需要了，只是留一个格式，选择bbc和cnn自动是 newsapi，其余的都是 news data -->
          <!-- <div class="relative">
            <Button
              icon="pi pi-angle-down"
              label="API"
              outlined
              iconPos="right"
              size="small"
              v-styleclass="{
                selector: '.newsSource',
                enterFromClass: 'hidden',
                enterActiveClass: 'animate-scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'animate-fadeout',
                hideOnOutsideClick: true,
              }"
            />
            <ul
              class="newsSource list-none p-1 m-0 rounded-border shadow-0 lg:shadow lg:absolute top-10 bg-surface-0 dark:bg-surface-900 hidden origin-top w-auto right-0 lg:w-auto"
            >
              <li>
                <a
                  v-styleclass="{
                    selector: '.newsSource',
                    toggleClass: 'hidden',
                  }"
                  @click="selectedSource = 'newsapi'"
                  class="flex px-4 py-2 rounded items-center text-sm hover:bg-surface-100 cursor-pointer dark:hover:bg-surface-800 transition-colors duration-150 gap-2"
                >
                  <span>newsapi.org</span>
                </a>
                <a
                  v-styleclass="{
                    selector: '.newsSource',
                    toggleClass: 'hidden',
                  }"
                  @click="selectedSource = 'newsdata'"
                  class="flex px-4 py-2 rounded items-center text-sm hover:bg-surface-100 cursor-pointer dark:hover:bg-surface-800 transition-colors duration-150 gap-2"
                >
                  <span>newsdata.io</span>
                </a>
              </li>
            </ul>
          </div> -->

          <!-- Rest of the butons -->
          <!-- <Button label="Login" text rounded size="small" />
          <Button label="Register" rounded size="small" /> -->
          <!-- Subscribe dialog -->
          <!-- <Button label="Subscribe" rounded size="small" /> -->

          <!-- Button to open the subscription dialog -->
          <Button label="Subscribe" rounded size="small" @click="subDialogToggle = true" />

          <Toast />
          <Dialog
            v-model:visible="subDialogToggle"
            :modal="true"
            :show-header="false"
            :dismissableMask="true"
            :breakpoints="{ '960px': '75vw', '640px': '80vw' }"
            :style="{ width: '40rem' }"
            class="shadow-sm rounded-2xl"
            :pt="{ content: '!p-6' }"
          >
            <div class="flex flex-col gap-4">
              <!-- Header -->
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <span class="text-surface-600 dark:text-surface-400 font-medium text-base"
                    >Subscription</span
                  >
                </div>
                <!-- Close button -->
                <Button
                  type="button"
                  icon="pi pi-times"
                  text
                  rounded
                  severity="secondary"
                  class="w-10 h-10 !p-2"
                  @click="subDialogToggle = false"
                />
              </div>

              <!-- News Header -->
              <div class="flex justify-between items-center">
                <h3 class="font-semibold text-xl m-0 text-surface-900 dark:text-surface-0">
                  <span class="text-yellow-500">🔔</span> Subscribe to your favourite News Source!
                </h3>
              </div>

              <!-- News Selection -->
              <Divider class="!my-2" />

              <div class="px-2 flex flex-col items-center gap-2">
                <Select
                  v-model="selectedNewsSource"
                  :options="newsSources"
                  showClear
                  optionLabel="name"
                  placeholder="Select a City"
                  checkmark
                  :highlightOnSelect="false"
                  class="w-full md:w-56"
                />

                <template v-if="selectedNewsSource">
                  <h4 class="font-medium text-lg mt-5 text-surface-900 dark:text-surface-0">
                    {{ selectedNewsSource.name }}
                  </h4>
                  <p class="text-base leading-normal text-surface-700 dark:text-surface-300 m-0">
                    {{ selectedNewsSource.description }}
                  </p>
                </template>
              </div>

              <Divider class="!my-2" />

              <!-- Real subscribe function -->
              <div class="flex justify-end">
                <Button label="Subscribe" severity="primary" @click="subscribe()" />
              </div>
            </div>
          </Dialog>
          <Button label="Start" size="small" severity="primary" @click="start()" />
          <Button label="Stop" size="small" severity="primary" @click="stop()" />
          <!-- Notification Bell -->
          <div class="relative">
            <!-- Button with Badge -->
            <OverlayBadge :value="queuedMsg" v-if="showBadge" severity="danger" size="small">
              <Button
                icon="pi pi-bell"
                size="Normal"
                variant="text"
                severity="primary"
                @click="bellDropDown()"
                v-styleclass="{
                  selector: '#notificationPanel',
                  enterFromClass: 'hidden',
                  enterActiveClass: 'animate-scalein',
                  leaveToClass: 'hidden',
                  leaveActiveClass: 'animate-fadeout',
                  hideOnOutsideClick: true,
                }"
              />
            </OverlayBadge>
            <!-- 这个是为了当 Badge 为 0 时，要让他从页面上消失，但是又因为里面吧 Button 包裹了，所以单独造一个一模一样的button-->
            <!-- 这个只会在 Badge 为 0 的时候渲染 -->
            <Button
              icon="pi pi-bell"
              size="Normal"
              variant="text"
              severity="primary"
              v-if="!showBadge"
              @click="bellDropDown()"
              v-styleclass="{
                selector: '#notificationPanel',
                enterFromClass: 'hidden',
                enterActiveClass: 'animate-scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'animate-fadeout',
                hideOnOutsideClick: true,
              }"
            />
            <!-- 下拉通知条 -->
            <div
              id="notificationPanel"
              class="hidden absolute right-0 w-[400px] max-h-[70vh] border border-surface-200 overflow-y-auto rounded-2xl origin-top bg-surface-50 dark:bg-surface-950 dark:border-surface-900 lg:p-0"
            >
              <div
                v-if="subscriptionStore.subscriptionTopics.length <= 0"
                class="bg-surface-0 dark:bg-surface-800 shadow-sm rounded-2xl w-full flex flex-col gap-0"
              >
                <h1
                  class="text-center text-surface-900 px-5 pt-3 pb-3 dark:text-surface-0 font-medium text-lg leading-tight"
                >
                  No Subscriptions yet
                </h1>
              </div>
              <div
                v-if="subscriptionStore.subscriptionTopics.length > 0"
                class="bg-surface-0 dark:bg-surface-800 shadow-sm rounded-2xl w-full flex flex-col gap-0"
              >
                <!-- Header -->
                <div class="flex items-center justify-between">
                  <div
                    class="text-surface-900 px-5 pt-3 dark:text-surface-0 font-medium text-lg leading-tight"
                  >
                    Notifications
                  </div>
                </div>
                <Divider />
                <!-- Notifications!!! -->
                <div class="flex flex-col">
                  <div
                    v-for="(message, index) in subscriptionStore.notificationList"
                    :key="index"
                    class="hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer p-4 transition-colors duration-200"
                    @click="handleImageClick(message)"
                  >
                    <div class="flex gap-4">
                      <img :src="message.urlToImage" class="w-16 h-16 rounded-full object-cover" />
                      <div class="flex-1 flex flex-col gap-3">
                        <div class="flex justify-between items-center">
                          <div
                            class="text-surface-900 dark:text-surface-0 font-medium leading-tight"
                          >
                            {{ message.name ?? 'Unknown' }}
                          </div>
                          <div class="text-surface-500 dark:text-surface-400 text-sm font-medium">
                            {{ dayjs(message.publishedAt).fromNow() }}
                          </div>
                        </div>
                        <div class="text-surface-700 dark:text-surface-300 leading-tight">
                          {{ message.title }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- </ul> -->
          </div>
        </div>
      </div>

      <!-- Used for sm screen, do the same stuff as the above subscribe -->
      <div class="relative lg:hidden">
        <Button label="Subscribe" severity="primary" rounded @click="subDialogToggle = true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
// 获得 Type
import type { NewsApi, NewsData } from '@/types/News'
// Solace Guaranteed Receiver
import GuaranteedSubscriber from '@/event/guaReceiver'
// SEMP Manager
import { SEMP_Manager } from '@/api/SEMP/semp'
// Subscription Backend API
import { subscriptionManager } from '@/api/subscription'
// SUbscription Topics
import { useSubscription } from '@/stores/subscription/subscription'

// Load the plug-in
dayjs.extend(relativeTime)

// Toast
const toast = useToast()

// Event Broker Subscriber
let sub: GuaranteedSubscriber | null = null
// Toogle for the notification badge
let showBadge = ref(false)
//Badge number
let queuedMsg = ref(0)

// Pinia
const subscriptionStore = useSubscription()

// Dark Mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('my-app-dark')
}

// Sidebar
const visible = ref(false)

// Subscribe
const subDialogToggle = ref(false)

// News Source Selection
const selectedNewsSource = ref()
const newsSources = ref([
  {
    name: 'BBC',
    id: 'bbc',
    description:
      "BBC originally established in 1922 as the British Broadcasting Company, it evolved into its current state with its current name on New Year's Day 1927. The oldest and largest local and global broadcaster by stature and by number of employees, the BBC employs over 21,000 staff in total, of whom approximately 17,200 are in public-sector broadcasting.",
  },
  {
    name: 'CNN',
    id: 'cnn',
    description:
      'CNN is a multinational news organization, today most notably operating multiple social media accounts, a website and a TV channel. It is headquartered in Atlanta and was founded in 1980 by American media proprietor Ted Turner and Reese Schonfeld as a 24-hour cable news channel.',
  },
  {
    name: 'Reuters',
    id: 'reuters',
    description:
      'Reuters is a news agency owned by Thomson Reuters. It employs around 2,500 journalists and 600 photojournalists in about 200 locations worldwide writing in 16 languages. Reuters is one of the largest news agencies in the world',
  },
  {
    name: 'NY Times',
    id: 'nytimes',
    description:
      "The New York Times is an American daily newspaper based in New York City. It covers domestic, national, and international news, and publishes opinion pieces, investigative reports, and reviews. As one of the longest-running newspapers in the United States, the Times serves as one of the country's newspapers of record",
  },
  {
    name: 'Economist',
    id: 'economist',
    description:
      'The Economist is a British news and current affairs journal published in a weekly print magazine format and daily on digital platforms. Variously referred to as a magazine and a newspaper, it publishes stories on topics that include economics, business, geopolitics, technology and culture.',
  },
])

// Notification (Bell) Dropdown
const bellDropDown = () => {
  // TODO: 考虑啊是否吧这个移到onMounted里，只链接一次，因为这样点击bell之后，badge更新的会有延迟
  // When click, start receving message
  if (sub?.isConnected()) {
    // sub?.startConsume()
  }
  // 再次调用 SEMP 看看是否被接受完了，如果接受完，把 Badge 清零
  // getQueueInfo()
}

// 启动时 call 一下 SEMP 的 API，查看多少积压信息，然后就可以自由发挥开始接收啦！
const getQueueInfo = async () => {
  queuedMsg.value = await (await SEMP_Manager.getQueueInfo()).data
  if (queuedMsg.value > 0) {
    showBadge.value = true
  } else {
    showBadge.value = false
  }
  console.log('Queued message count: ', queuedMsg.value)
}

// 可以让用户即将访问订阅页面的时候触发 Solace 链接, 或者点击未读消息的组件的时候触发链接！这样就不用每次登录自动
// 链接，还是手动触发链接比较稳。

// Connect to Solace
const connect = async () => {
  if (!sub) return
  // const subscriber = TopicSubscriber()

  // 这个只能在当前 tab 判断
  if (sub.isConnected()) {
    console.log('Already connected!')
    return
  }

  sub.init()

  sub.connect(
    'wss://mr-connection-pj7lvlk6kp9.messaging.mymaas.net:443',
    'elysra',
    'solace-cloud-client',
    'ghl0r9ert82m356hgomr0h16ph',
  )
}

// 以下这俩更像是一个停止和开始收取最新新闻的功能
// Start consuming
const start = () => {
  sub?.startConsume(onNewsReceived)
}

// Stop Solace consuming
const stop = () => {
  sub?.stopConsume()
}

// Subscibe to News, if this func is not being called, neither Bell dropdown
// nor the subscription will work
const subscribe = async () => {
  if (!selectedNewsSource.value) {
    toast.add({
      severity: 'error',
      summary: 'Oops',
      detail: 'Please select a News Source to subscribe',
      life: 3000,
    })
    return
  }
  console.log(subscriptionStore.subscriptionTopics)

  console.log(selectedNewsSource.value.name.toLowerCase())

  if (subscriptionStore.subscriptionTopics.includes(selectedNewsSource.value.name.toLowerCase())) {
    toast.add({
      severity: 'warn',
      summary: 'Already Subscribed',
      detail: 'You have already subscribed to ' + selectedNewsSource.value.name,
      life: 3000,
    })
    return
  }

  // Make sure is connected to the broker
  connect()

  console.log('Selected Source: ', selectedNewsSource.value.id)
  // Subscribe!
  const ifSucceed = await subscriptionManager.subscribe(selectedNewsSource.value.id)
  if (ifSucceed) {
    // 添加订阅的 Topic
    subscriptionStore.addSubscriptionTopic(selectedNewsSource.value.name.toLowerCase())

    sub?.startConsume(onNewsReceived)

    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Successfully subscribed to ' + selectedNewsSource.value.name + '!',
      life: 3000,
    })

    selectedNewsSource.value = null

    subDialogToggle.value = false
  }
}

// 收到信息的 CallBack 函数
const onNewsReceived = (payload: NewsApi | NewsData, newsSource: string, newsType: string) => {
  getQueueInfo()

  console.log('Getting news: ')
  console.log(payload)
  console.log(newsSource)

  // 加入 Store
  switch (newsSource) {
    case 'bbc':
      subscriptionStore.addBBC(payload as NewsApi)
      break
    case 'cnn':
      subscriptionStore.addCNN(payload as NewsApi)
      break
    case 'reuters':
      subscriptionStore.addReuters(payload as NewsData)
      break
    case 'nytimes':
      subscriptionStore.addNYTimes(payload as NewsData)
      break
    case 'economist':
      subscriptionStore.addEconomist(payload as NewsData)
      break
  }

  // 构建 Bell 通知对象
  let sourceName = ''
  let publishedAt = ''
  let image = ''
  let url = ''

  if (newsType === 'NewsAPI') {
    const p = payload as NewsApi
    sourceName = p.source.name.toLowerCase().includes('cnn') ? 'cnn' : 'bbc'
    publishedAt = p.localDateTime
    image = p.urlToImage
    url = p.url
  } else if (newsType === 'NewsData') {
    const p = payload as NewsData
    if (p.source_id.toLowerCase().includes('reuters')) sourceName = 'reuters'
    else if (p.source_id.toLowerCase().includes('nytimes')) sourceName = 'nytimes'
    else if (p.source_id.toLowerCase().includes('economist')) sourceName = 'economist'

    publishedAt = p.pubDate
    image = p.image_url
    url = p.link
  }

  const notification = {
    title: payload.title,
    name: sourceName,
    publishedAt,
    urlToImage: image,
    link: url,
  }

  subscriptionStore.addNotificationList(notification)
}

// 每一个 News 点击之后，会带到相应的新闻页面
function handleImageClick(news: any) {
  const url = news.link
  console.log('Clicked URL:', url)
  if (url) {
    window.open(url, '_blank')
  }
}

onMounted(() => {
  sub = new GuaranteedSubscriber('subscription', 'subscriptions/news/*', (msg) => console.log(msg))

  // 开启新 tab 的时候清空 订阅
  // subscriptionStore.subscriptionTopics = []
  // 防止多开一个tab的时候还在fetch
  if (subscriptionStore.subscriptionTopics.length > 0) {
    getQueueInfo()
  }

  connect()
})

// Dynamically update the Badge's number
window.setInterval(() => {
  // 防止多开一个tab的时候还在fetch
  if (subscriptionStore.subscriptionTopics.length > 0) {
    getQueueInfo()
  }
}, 5000)
</script>
