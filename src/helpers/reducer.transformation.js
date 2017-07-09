import { ui } from './actions'
import wholeState from './state'

let defaultState = wholeState.transformations.present
let local = {};

/**
 * Trigger off a transform for the ui
 */
local[ui.pushTransform.type] = function(state, action){
  return Object.assign({}, state, {
    translate: Object.assign({}, defaultState.translate, action.transform.translate || {}),
    rotation: Object.assign(defaultState.rotation, action.transform.rotation || 0)
  })
}

/**
 * Simple broken-up reducer
 */
export default function transformationReducer(state = defaultState, action){
  if ( local[action.type] ) {
    return local[action.type].apply(this, arguments);
  }
  return state;
}