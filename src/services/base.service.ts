import AxiosService from './axios.service'

export default class BaseService {
  private api = new AxiosService()

  get(query?: string) {
    return this.api.get(query)
  }

  post(url: string, body: any) {
    return this.api.post(url, body)
  }
}
