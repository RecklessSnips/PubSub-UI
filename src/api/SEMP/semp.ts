/*
这个 API 提供对接 Solace Event Broker 的 REST API，查看 Queue 的信息

一切链接从后端获取
*/
import api from '../index'

const endpoint_prefix = 'http://localhost:8083/api/semp'

export const SEMP_Manager = {
  getQueueInfo() {
    return api.get(endpoint_prefix + '/queue/msg')
  },
}
