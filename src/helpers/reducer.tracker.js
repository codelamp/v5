import { tracker } from './actions'
import wholeState from './state'

export default function trackerReducer(reducer, _initialState) {

  const initialState = Object.assign({ past: [], future: [] }, _initialState, {
    present: reducer(undefined, _initialState.present || {})
  })

  return function (state = initialState, action) {
    const { past, present, future } = state
    if ( tracker.trackForward.is(action) ) {
      const next = future[0]
      const newFuture = future.slice(1)
      return {
        past: [...past, present],
        present: next,
        future: newFuture
      }
    }
    else if ( tracker.trackBackward.is(action) ) {
      const previous = past[past.length - 1]
      const newPast = past.slice(0, past.length - 1)
      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      }
    }
    else {
      const newPresent = reducer(present, action)
      if (present === newPresent) {
        return state
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: []
      }
    }
  }

}