import { IProducer } from '@interfaces'

export const MOCKED_PRODUCERS: Array<IProducer> = [
  {
    key: '0',
    name: 'Daniel Freitas',
    document: '350.589.368-44',
    state: 'SP',
    city: 'Santos',
    farmableAreaAcre: 1,
    vegetationAreaAcre: 2,
    totalAreaAcre: 3,
    crops: ['Café'],
  },
  {
    key: '1',
    name: 'Bruno Weissberg',
    document: '367.812.945-12',
    state: 'MG',
    city: 'Belo Horizonte',
    farmableAreaAcre: 2,
    vegetationAreaAcre: 3,
    totalAreaAcre: 6,
    crops: ['Soja'],
  },
  {
    key: '2',
    name: 'Gustavo Baraka',
    document: '401.248.413-89',
    state: 'GO',
    city: 'Brasília',
    farmableAreaAcre: 3,
    vegetationAreaAcre: 0,
    totalAreaAcre: 4,
    crops: ['Milho', 'Cana de açúcar'],
  },
]
