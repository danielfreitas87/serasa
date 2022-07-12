import { AnyAction } from 'redux'
import { takeLatest, put } from 'redux-saga/effects'
import {
  FETCH_PRODUCERS,
  SAVE_PRODUCER,
  REMOVE_PRODUCER,
  SET_EDITING_PRODUCER,
  fetchProducersSuccess,
  fetchProducersFailure,
  saveProducerSuccess,
  saveProducerFailure,
  changeCurrentPage,
  removeProducerSuccess,
  removeProducerFailure,
} from '@actions'
import { IProducer } from '@interfaces'
import { ProducerService } from '@services'

const PRODUCER_EDIT = 3
const PRODUCERS_LIST = 2

function* _fetchProducers() {
  try {
    const producerService = new ProducerService()
    const response: Array<IProducer> = yield producerService.fetchProducers()
    if (response) {
      yield put(fetchProducersSuccess(response))
    } else {
      yield put(fetchProducersFailure())
    }
  } catch (error) {
    yield put(fetchProducersFailure())
  }
}

function* _saveProducer({ payload }: AnyAction) {
  try {
    const producerService = new ProducerService()
    const response: Array<IProducer> = yield producerService.saveProducer(
      payload,
    )
    if (response) {
      yield put(changeCurrentPage(PRODUCERS_LIST))
      yield put(saveProducerSuccess(response))
    } else {
      yield put(saveProducerFailure())
    }
  } catch (error) {
    yield put(saveProducerFailure())
  }
}

function* _removeProducer({ payload }: AnyAction) {
  try {
    const producerService = new ProducerService()
    const response: Array<IProducer> = yield producerService.removeProducer(
      payload,
    )
    if (response) {
      yield put(removeProducerSuccess(response))
    } else {
      yield put(removeProducerFailure())
    }
  } catch (error) {
    yield put(saveProducerFailure())
  }
}

function* _setEditingProducer({ payload }: AnyAction) {
  yield put(changeCurrentPage(PRODUCER_EDIT))
}

export default function* producerSaga() {
  yield takeLatest(FETCH_PRODUCERS, _fetchProducers)
  yield takeLatest(SAVE_PRODUCER, _saveProducer)
  yield takeLatest(REMOVE_PRODUCER, _removeProducer)
  yield takeLatest(SET_EDITING_PRODUCER, _setEditingProducer)
}
