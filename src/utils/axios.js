import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_NETLIFY_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// axiosInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     return response
//   },
//   function (error) {
//     // Do something with response error
//     return Promise.reject(error)
//   }
// )

export default axiosInstance
