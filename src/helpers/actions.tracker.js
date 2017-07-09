import actionTools from './actions.tools.js'

/**
 * Move forward in history
 */
export function trackForward(){
  return dispatch => {
    return new Promise(function(res, rej){
      /**
       * @namespace TrackerDirection
       */
      let action = {
        type: trackForward.type
      }
      dispatch(action)
      res(action)
    })
  }
}

/**
 * Move backward in history
 */
export function trackBackward(){
  return dispatch => {
    return new Promise(function(res, rej){
      /**
       * @namespace TrackerDirection
       */
      let action = {
        type: trackBackward.type
      }
      dispatch(action)
      res(action)
    })
  }
}

actionTools.enhanceCreator(trackForward, 'TRACK_FORWARD')
actionTools.enhanceCreator(trackBackward, 'TRACK_BACKWARD')