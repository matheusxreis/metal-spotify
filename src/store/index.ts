import { createStore } from 'redux'
import rootReducer from './rootReducer'

import { applyMiddleware } from '@reduxjs/toolkit'
import { SagaMiddleware } from 'redux-saga'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer,
   applyMiddleware(sagaMiddleware))

const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export {store, persistor}
