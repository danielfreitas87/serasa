import BaseService from './base.service'
import { MOCKED_UFS } from './address.mocked'

export class AddressService extends BaseService {
  fetchUFs() {
    return { data: MOCKED_UFS.map((uf) => ({ value: uf })) }
  }

  fetchCities(UF: string) {
    return super.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/distritos`,
    )
  }
}
