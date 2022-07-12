import axios, { Axios } from 'axios'

export default class AxiosService extends Axios {
  private static instance: typeof Axios

  constructor() {
    super()
    if (!AxiosService.instance) AxiosService.instance = axios.create()
    return AxiosService.instance
  }
}
