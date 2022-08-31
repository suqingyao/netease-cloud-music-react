import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      return Promise.reject(response.data)
    }
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
