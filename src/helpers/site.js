import store from './store.js'
import * as actions from './actions.js'
import { triggerTransform } from './thunks.js'

const util = require('util')
const fullLog = function(a){
  console.log(util.inspect(a, {
    showHidden: false,
    depth: null
  }))
}

// listen out for the changes
store.subscribe(() =>
  fullLog(store.getState())
)

// dispatch a transform
store.dispatch(triggerTransform({ translate: { x: 100, y: 200, z: 0 } }))

  .then(() => {
    // dispatch another transform
    return store.dispatch(triggerTransform({
      translate: { x: 500, y: 200, z: 0 }
    }));
  })

  .then(() => {
    
    // test out the tracking, so we can go forwards and back in transform history
    store.dispatch(actions.tracker.trackBackward())
      .then(() => {
        store.dispatch(actions.tracker.trackForward())
      })
    ;
    
  })
;


