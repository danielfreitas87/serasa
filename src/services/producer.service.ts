import BaseService from './base.service'
import { IProducer } from '@interfaces'
import { createOrUpdateProducer } from '@helpers'
import { MOCKED_PRODUCERS } from './producer.mocked'

const LOCAL_STORAGE_PRODUCERS_KEY = '@producers'

export class ProducerService extends BaseService {
  getProducers() {
    const producersDataUnparsed = localStorage.getItem(
      LOCAL_STORAGE_PRODUCERS_KEY,
    )
    return producersDataUnparsed ? JSON.parse(producersDataUnparsed) : []
  }

  setProducers(producers: Array<IProducer>) {
    localStorage.setItem(LOCAL_STORAGE_PRODUCERS_KEY, JSON.stringify(producers))
  }

  fetchProducers() {
    const data = this.getProducers()
    !data.length && this.setProducers(MOCKED_PRODUCERS)
    return data
  }

  saveProducer(producer: IProducer) {
    const producersData: Array<IProducer> = this.getProducers()
    const data = createOrUpdateProducer(producer, producersData)
    this.setProducers(data)
    return data
  }

  removeProducer(key: string) {
    const producersData: Array<IProducer> = this.getProducers()
    const data = producersData.filter((producer) => producer.key !== key)
    this.setProducers(data)
    return data
  }
}
