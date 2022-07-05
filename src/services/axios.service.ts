import axios, { Axios } from 'axios'

const DEFAULT_API_BASE_URL = 'http://localhost'
const DEFAULT_API_PORT = 3001

const env = process.env

const AXIOS_CONFIG = {
  baseURL:
    env.API_BASE_URL && env.API_PORT
      ? `${env.API_BASE_URL}:${env.API_PORT}`
      : `${DEFAULT_API_BASE_URL}:${DEFAULT_API_PORT}`,
  headers: {
    'Content-Type': 'application/json',
  },
}

export default class AxiosService extends Axios {
  private static instance: typeof Axios

  constructor() {
    super()
    if (!AxiosService.instance)
      AxiosService.instance = axios.create(AXIOS_CONFIG)

    return AxiosService.instance
  }
}
