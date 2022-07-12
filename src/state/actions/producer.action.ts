import { IProducer } from '@interfaces'

const prefix = 'PRODUCER'
const FETCH_PRODUCERS = `${prefix}.FETCH_PRODUCERS`
const FETCH_PRODUCERS_SUCCESS = `${prefix}.FETCH_PRODUCERS_SUCCESS`
const FETCH_PRODUCERS_FAILURE = `${prefix}.FETCH_PRODUCERS_FAILURE`
const SAVE_PRODUCER = `${prefix}.SAVE_PRODUCER`
const SAVE_PRODUCER_SUCCESS = `${prefix}.SAVE_PRODUCER_SUCCESS`
const SAVE_PRODUCER_FAILURE = `${prefix}.SAVE_PRODUCER_FAILURE`
const REMOVE_PRODUCER = `${prefix}.REMOVE_PRODUCER`
const REMOVE_PRODUCER_SUCCESS = `${prefix}.REMOVE_PRODUCER_SUCCESS`
const REMOVE_PRODUCER_FAILURE = `${prefix}.REMOVE_PRODUCER_FAILURE`
const SET_EDITING_PRODUCER = `${prefix}.SET_EDITING_PRODUCER`

const fetchProducers = () => ({
  type: FETCH_PRODUCERS,
})

const fetchProducersSuccess = (payload: Array<IProducer>) => ({
  type: FETCH_PRODUCERS_SUCCESS,
  payload,
})

const fetchProducersFailure = () => ({
  type: FETCH_PRODUCERS_FAILURE,
})

const saveProducer = (payload: IProducer) => ({
  type: SAVE_PRODUCER,
  payload,
})

const saveProducerSuccess = (payload: Array<IProducer>) => ({
  type: SAVE_PRODUCER_SUCCESS,
  payload,
})

const saveProducerFailure = () => ({
  type: SAVE_PRODUCER_FAILURE,
})

const setEditingProducer = (payload: IProducer | null) => ({
  type: SET_EDITING_PRODUCER,
  payload,
})

const removeProducer = (payload: string) => ({
  type: REMOVE_PRODUCER,
  payload,
})

const removeProducerSuccess = (payload: Array<IProducer>) => ({
  type: REMOVE_PRODUCER_SUCCESS,
  payload,
})

const removeProducerFailure = () => ({
  type: REMOVE_PRODUCER_FAILURE,
})

export {
  FETCH_PRODUCERS,
  FETCH_PRODUCERS_SUCCESS,
  FETCH_PRODUCERS_FAILURE,
  SAVE_PRODUCER,
  SAVE_PRODUCER_SUCCESS,
  SAVE_PRODUCER_FAILURE,
  REMOVE_PRODUCER,
  REMOVE_PRODUCER_SUCCESS,
  REMOVE_PRODUCER_FAILURE,
  SET_EDITING_PRODUCER,
  fetchProducers,
  fetchProducersSuccess,
  fetchProducersFailure,
  saveProducer,
  saveProducerSuccess,
  saveProducerFailure,
  removeProducer,
  removeProducerSuccess,
  removeProducerFailure,
  setEditingProducer,
}
