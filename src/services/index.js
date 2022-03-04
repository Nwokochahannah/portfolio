import axiosInstance from '../utils/axios'

class APIService {
  static async get(route, config) {
    //get data from db
    return axiosInstance.get(route, config)
  }

  static async post(route, payload, config) {
    //post a new data in db
    return axiosInstance.post(route, payload, config)
  }

  static async update(route, id, payload, config) {
    //update data by id in db
    return axiosInstance.patch(`${route}/${id}`, payload, config)
  }

  static async delete(route, id, config) {
    //delete data by id from db
    return axiosInstance.patch(`${route}/${id}`, config)
  }
}

export default APIService
