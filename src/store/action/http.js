import axios from 'axios'
import qs from 'qs'

const http = axios.create({
  baseURL: '/miaov',
  withCredentials: true, // 携带cookie
  transformRequest: (data) => {
    return qs.stringify(data)
  }
})

export default http
