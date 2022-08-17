import {createStore} from 'redux'
import {reducer} from './reducer'
import {applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)
