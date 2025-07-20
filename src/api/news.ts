import api from './index'

// 获取主页所有新闻的 API，懒，没有弄完

const endpoint_prefix = '/api/subscribe'

export const news = {
  getBBC() {
    return api.get(endpoint_prefix + '/bbc')
  },
}
