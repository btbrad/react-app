import axios from 'axios'

const http = axios.create({
  baseUrl: '/miaov',
  withCredentials: true
})
