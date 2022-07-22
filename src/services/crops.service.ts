import { capitalizeFirstLetter } from '@helpers'
import { MOCKED_CROPS } from './crops.mocked'

export class CropsService {
  fetchCrops() {
    return {
      data: MOCKED_CROPS.map((crop) => capitalizeFirstLetter(crop)),
    }
  }
}
