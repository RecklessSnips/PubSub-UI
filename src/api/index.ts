// src/api/index.ts
import axios from 'axios'

const api = axios.create({
  // News Subscriber
  baseURL: 'http://localhost:8081',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default api
