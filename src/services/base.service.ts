import { Component } from 'react'
import AxiosService from './axios.service'

export default class BaseService extends Component<string> {
  private url: string
  private api: AxiosService

  constructor(url: string) {
    super(url)
    this.url = url
    this.api = new AxiosService()
  }

  get(query?: string) {
    return this.api.get(this.url, query)
  }

  post(body: any) {
    return this.api.post(this.url, body)
  }
}
