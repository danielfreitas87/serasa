import { ColumnsType } from 'antd/lib/table'
import { IProducer } from '@interfaces'
import { ProducerEnum } from '@enums'
import { sortOptions } from '@helpers'

export const ACTIONS_KEY = 'actions'

export const COLUMNS: ColumnsType<IProducer> = [
  {
    title: 'Nome',
    dataIndex: ProducerEnum.NAME,
    key: ProducerEnum.NAME,
    width: 200,
    ...sortOptions(ProducerEnum.NAME),
  },
  {
    title: 'Documento',
    dataIndex: ProducerEnum.DOCUMENT,
    key: ProducerEnum.DOCUMENT,
    width: 110,
    ...sortOptions(ProducerEnum.DOCUMENT),
  },
  {
    title: 'Estado',
    dataIndex: ProducerEnum.STATE,
    key: ProducerEnum.STATE,
    width: 50,
    ...sortOptions(ProducerEnum.STATE),
  },
  {
    title: 'Cidade',
    dataIndex: ProducerEnum.CITY,
    key: ProducerEnum.CITY,
    width: 160,
    ...sortOptions(ProducerEnum.CITY),
  },
  {
    title: 'Área da fazenda em hectares',
    children: [
      {
        title: 'Cultivável',
        dataIndex: ProducerEnum.FARMABLE_ACRE,
        key: ProducerEnum.FARMABLE_ACRE,
        width: 60,
        ...sortOptions(ProducerEnum.FARMABLE_ACRE),
      },
      {
        title: 'Vegetação',
        dataIndex: ProducerEnum.VEGETATION_ACRE,
        key: ProducerEnum.VEGETATION_ACRE,
        width: 60,
        ...sortOptions(ProducerEnum.VEGETATION_ACRE),
      },
      {
        title: 'Total',
        dataIndex: ProducerEnum.TOTAL_ACRE,
        key: ProducerEnum.TOTAL_ACRE,
        width: 40,
        ...sortOptions(ProducerEnum.TOTAL_ACRE),
      },
    ],
  },
  {
    title: 'Cultivos',
    dataIndex: ProducerEnum.CROPS,
    key: ProducerEnum.CROPS,
    width: 200,
    ...sortOptions(ProducerEnum.CROPS),
  },
  {
    title: 'Ações',
    dataIndex: ACTIONS_KEY,
    key: ACTIONS_KEY,
    width: 50,
    fixed: 'right',
  },
]
