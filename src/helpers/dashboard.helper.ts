import { IChart, IProducer } from '@interfaces'
import { MOCKED_UFS } from '@services'

export const mapSoilToChartData = (producers: Array<IProducer>) => {
  const initialValues: Array<IChart> = [
    {
      type: 'Agricultável',
      value: 0,
    },
    {
      type: 'Vegetação',
      value: 0,
    },
  ]
  return initialValues.map((soil: IChart, index: number) =>
    producers.reduce(
      (prevData: IChart, producer: IProducer) => ({
        type: soil.type,
        value:
          (prevData.value || 0) +
          (index === 0 ? producer.farmableAcre : producer.vegetationAcre),
      }),
      {} as IChart,
    ),
  )
}

export const mapStatesToChartData = (producers: Array<IProducer>) => {
  const initialValues: Array<IChart> = MOCKED_UFS.map((uf) => ({
    type: uf,
    value: 0,
  }))
  const statesToCharData = initialValues.map((uf: IChart) => {
    const filteredStates = producers.filter(
      (producer) => producer.state === uf.type,
    )

    return { ...uf, value: filteredStates.length }
  })

  return statesToCharData.filter((uf) => uf.value !== 0)
}

export const mapCropsToChartData = (
  producers: Array<IProducer>,
  crops: Array<string>,
) => {
  const initialValues: Array<IChart> = crops?.map((crop) => ({
    type: crop,
    value: 0,
  }))

  const cropsToChartData = initialValues.map((crop: IChart) => {
    const filteredCrops = producers.filter((producer) =>
      producer.crops.includes(crop.type),
    )

    return { ...crop, value: filteredCrops.length }
  }, initialValues)

  return cropsToChartData.filter((crop) => crop.value !== 0)
}

export const getTotalAcre = (producers: Array<IProducer>) => {
  if (!producers?.length) return 0
  return producers.reduce(
    (prevTotalAcre: number, currProducer: IProducer) =>
      prevTotalAcre + currProducer.totalAcre,
    0,
  )
}
