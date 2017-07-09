import { combineReducers } from 'redux'
import { transformationReducer, trackerReducer } from './reducers.js'
import wholeState from './state'

let defaultState = wholeState.transformations

export default combineReducers({
  transformations: trackerReducer(transformationReducer, defaultState)
})