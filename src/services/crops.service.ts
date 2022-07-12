import { capitalizeFirstLetter } from '@helpers'
import BaseService from './base.service'
import { MOCKED_CROPS } from './crops.mocked'

export class CropsService extends BaseService {
  fetchCrops() {
    return {
      data: MOCKED_CROPS.map((crop) => capitalizeFirstLetter(crop)),
    }
  }
}
