import * as ActionsUI from './actions.ui'
//import { animationOccuring, animationComplete } from './actions.animation'

export function triggerTransform(transform){
  return dispatch => {
    //return new Promise(function(res, rej){
      let request = ActionsUI.pushTransform(transform)
      
      return dispatch(request)
      
      /*
      dispatch(request)
        .then(() => { return dispatch(animationOccurring(request)) })
        .then(() => { return dispatch(animationComplete(request)) })
        .then((o) => {
          res(o)
        })
        // @TODO: reject()
      ;
      */
    //})
  }
}