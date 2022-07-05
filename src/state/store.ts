import {
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import combinedReducers from '@reducers'
import rootSaga from '@sagas'

const STORE_PERSIST_CONFIG_DEFAULT =
  'root'

const persistConfig = {
  key: STORE_PERSIST_CONFIG_DEFAULT,
  storage,
}

const persistedReducer = persistReducer(
  persistConfig,
  combinedReducers,
)

const sagaMiddleware =
  createSagaMiddleware()

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
)

export const persistor =
  persistStore(store)

export type RootState = ReturnType<
  typeof store.getState
>

sagaMiddleware.run(rootSaga)
