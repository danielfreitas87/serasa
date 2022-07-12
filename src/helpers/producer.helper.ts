import { IProducer } from '@interfaces'

function updateProducer(producer: IProducer, allProducers: Array<IProducer>) {
  const producersFiltered = allProducers.filter(
    (currProducer) => Number(currProducer.key) !== Number(producer.key),
  )
  return [...producersFiltered, producer]
}

function createProducer(producer: IProducer, allProducers: Array<IProducer>) {
  return [
    ...allProducers,
    {
      ...producer,
      key: (Number(allProducers[allProducers.length - 1]?.key) + 1).toString(),
    },
  ]
}

export function createOrUpdateProducer(
  producer: IProducer,
  allProducers: Array<IProducer>,
) {
  const createOrUpdate =
    producer?.key || Number(producer.key) === 0
      ? updateProducer
      : createProducer
  return createOrUpdate(producer, allProducers)
}
