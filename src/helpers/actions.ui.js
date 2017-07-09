/**
 * @param {TransformObject} transform - the transformation object to apply
 */
export function pushTransform(transform){
  return function(dispatch){
    return new Promise(function(res, rej) {
      /**
       * @namespace TransformationAction
       * @property {Symbol} type
       * @property {TransformObject} transform
       */
      let action = {
        type: pushTransform.type,
        transform: transform
      }
      dispatch(action)
      res(action)
    })
  }
}

pushTransform.type = Symbol('TRANSFORM_PUSH')