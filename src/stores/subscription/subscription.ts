import type { NewsApi, NewsData } from '@/types/News'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * 这个 Pinia 储存的是订阅的 Topic 和每个 Topic 的新闻
 */

export const useSubscription = defineStore(
  'subscription',
  () => {
    const subscriptionTopics = ref<string[]>([])
    const notificationList = ref<any[]>([])

    const bbc = ref<NewsApi[]>([])
    const cnn = ref<NewsApi[]>([])
    const reuters = ref<NewsData[]>([])
    const nytimes = ref<NewsData[]>([])
    const economist = ref<NewsData[]>([])

    const addSubscriptionTopic = (topic: string) => {
      if (!subscriptionTopics.value.includes(topic)) {
        subscriptionTopics.value.push(topic)
      }
    }

    const addNotificationList = (news: any) => {
      notificationList.value.unshift(news)
    }

    const addBBC = (news: NewsApi) => {
      bbc.value.push(news)
    }

    const addCNN = (news: NewsApi) => {
      cnn.value.push(news)
    }

    const addReuters = (news: NewsData) => {
      reuters.value.push(news)
    }

    const addNYTimes = (news: NewsData) => {
      nytimes.value.push(news)
    }

    const addEconomist = (news: NewsData) => {
      economist.value.push(news)
    }

    return {
      subscriptionTopics,
      notificationList,
      addSubscriptionTopic,
      addNotificationList,
      bbc,
      cnn,
      reuters,
      nytimes,
      economist,
      addBBC,
      addCNN,
      addReuters,
      addNYTimes,
      addEconomist,
    }
  },
  {
    persist: {
      storage: sessionStorage,
      pick: [
        'subscriptionTopics',
        'notificationList',
        'bbc',
        'cnn',
        'reuters',
        'nytimes',
        'economist',
      ],
    },
  },
)
