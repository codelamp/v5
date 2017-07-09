import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import initialState from './state'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()
const middleware = [thunkMiddleware, promiseMiddleware] //loggerMiddleware
const enhancers = [
  applyMiddleware(...middleware)
]

export default createStore(
  rootReducer,
  initialState,
  compose(...enhancers)
)