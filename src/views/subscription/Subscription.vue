<!-- 来展示每个订阅的页面 -->
<template>
  <div class="relative grid grid-cols-12 min-h-screen bg-surface-0 dark:bg-surface-950">
    <div
      class="col-span-3 ml-5 bg-surface-0 dark:bg-surface-950 h-screen border-r border-surface-200 dark:border-surface-800 flex flex-col select-none left-0 top-0"
    >
      <div class="overflow-y-auto flex-1 p-3 flex flex-col gap-4">
        <ul class="list-none m-0 flex flex-col gap-1">
          <li>
            <div
              v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'animate-slidedown',
                leaveToClass: 'hidden',
                leaveActiveClass: 'animate-slideup',
              }"
              class="flex items-center cursor-pointer p-3 gap-4 rounded-lg text-surface-900 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 border border-transparent hover:border-surface-100 dark:hover:border-surface-700 transition-colors duration-150"
              @click="isBookmarksOpen = !isBookmarksOpen"
            >
              <i
                class="pi pi-heart !text-base !leading-tight text-surface-500 dark:text-surface-400 group-hover:text-primary"
              />
              <span class="font-semibold text-base leading-tight">Home</span>
              <i
                :class="[
                  'pi',
                  isBookmarksOpen ? 'pi-angle-up' : 'pi-angle-down',
                  '!text-base',
                  '!leading-tight',
                  'text-surface-500',
                  'dark:text-surface-400',
                  'hover:text-primary-500',
                  'dark:hover:text-primary-400',
                  'ml-auto',
                ]"
              />
            </div>
            <ul
              class="list-none m-0 overflow-hidden flex flex-col gap-1 mt-1 transition-all duration-[400ms] ease-in-out"
            >
              <li v-for="(item, i) in subscriptionStore.subscriptionTopics" :key="i">
                <div class="border-l-2 border-surface-200 dark:border-surface-700">
                  <a
                    @click="selectedTopic = item"
                    :class="[
                      'flex items-center cursor-pointer p-3 gap-2 rounded-lg text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 border border-transparent hover:border-surface-100 dark:hover:border-surface-700 transition-colors duration-150 hover:text-surface-900 dark:hover:text-surface-50',
                      selectedTopic === item ? 'border-primary font-semibold' : '',
                    ]"
                  >
                    <i
                      class="pi pi-heart !text-base !leading-tight text-surface-500 dark:text-surface-400 group-hover:text-primary"
                    />
                    <span class="font-medium text-base leading-tight">{{ item }}</span>
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="col-span-9">
      <div
        v-if="subscriptionStore.subscriptionTopics.length <= 0"
        class="flex justify-center items-center mt-52"
      >
        <h1 class="text-2xl font-semibold">No Subscriptions yet</h1>
      </div>
      <div class="bg-surface-50 dark:bg-surface-950 mr-10 my-5 md:px-0 lg:px-0">
        <div
          v-if="subscriptionStore.subscriptionTopics.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="(news, index) in safeNewsList"
            :key="index"
            class="bg-surface-0 hover:bg-surface-100 cursor-pointer dark:bg-surface-900 dark:hover:bg-zinc-800 shadow-sm rounded-2xl p-2 inline-flex flex-col gap-4"
            @click="handleImageClick(news)"
          >
            <img
              :src="news.urlToImage ?? news.image_url"
              class="self-stretch h-[175px] rounded-lg object-cover"
            />
            <div class="self-stretch flex flex-col gap-4">
              <div class="self-stretch flex-1 p-2 flex flex-col gap-4">
                <div class="self-stretch inline-flex gap-4">
                  <div class="flex-1 inline-flex flex-col gap-2">
                    <div
                      class="self-stretch text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight"
                    >
                      {{ news.title }}
                    </div>
                    <div
                      class="self-stretch text-surface-800 dark:text-surface-400 text-base font-normal leading-tight"
                    >
                      {{ news.description }}
                    </div>
                  </div>
                </div>
                <div class="self-stretch inline-flex items-center gap-2">
                  <div
                    class="flex-1 text-surface-600 dark:text-surface-400 text-sm font-normal leading-tight"
                  >
                    {{ news.timeAgo ?? dayjs(news.localDateTime ?? news.pubDate).fromNow() }} |
                    {{ news.source?.name ?? news.source_name ?? 'Unknown' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <RouterView></RouterView>
</template>

<script lang="ts" setup>
// 2 Package used to compute how many hours has gone gaven a date
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import type { NewsApi, NewsData } from '@/types/News'
import { ref, computed, watch, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useSubscription } from '@/stores/subscription/subscription'

// Load the plug-in
dayjs.extend(relativeTime)

// Pinia
// Use to display the subscription topics
const subscriptionStore = useSubscription()

// 动态获得当前选中的订阅，来动态展示右边的新闻
const selectedTopic = ref<string | null>(null)

const safeNewsList = computed((): any[] => {
  if (!selectedTopic.value) return []
  console.log(selectedTopic.value)

  console.log(subscriptionStore.bbc)
  switch (selectedTopic.value.toLowerCase()) {
    case 'bbc':
      return subscriptionStore.bbc as any[]
    case 'cnn':
      return subscriptionStore.cnn as any[]
    case 'reuters':
      return subscriptionStore.reuters.map((item) => ({
        ...item,
        timeAgo: getRelativeTime(item.localDateTime),
      }))
    case 'ny times':
      return subscriptionStore.nytimes.map((item) => ({
        ...item,
        timeAgo: getRelativeTime(item.localDateTime),
      }))
    case 'economist':
      return subscriptionStore.economist.map((item) => ({
        ...item,
        timeAgo: getRelativeTime(item.localDateTime),
      }))
    default:
      return [] as any[]
  }
})

// Calculate the time
function getRelativeTime(localDateTime: number[]): string {
  const dt = dayjs(
    new Date(
      localDateTime[0],
      localDateTime[1] - 1,
      localDateTime[2],
      localDateTime[3],
      localDateTime[4],
      localDateTime[5],
    ),
  )
  return dt.fromNow()
}

// 每一个 News 点击之后，会带到相应的新闻页面
function handleImageClick(news: any) {
  const url = news.url ?? news.link
  if (url) {
    window.open(url, '_blank')
  }
}

watch(
  () => subscriptionStore.subscriptionTopics,
  (topics) => {
    if (topics.length > 0 && !selectedTopic.value) {
      selectedTopic.value = topics[0]
    }
  },
  { immediate: true },
)

// Sidebar
const isBookmarksOpen = ref(true)
</script>
