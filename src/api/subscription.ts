import api from './index'

// 用来订阅的 API

const endpoint_prefix = 'http://localhost:8082/api/subscription'

export const subscriptionManager = {
  subscribe(source: string) {
    return api.get(endpoint_prefix + `/subscribe/${source}`)
  },
}
