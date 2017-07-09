/**
 * @param {TransformObject} transform - the transformation object to apply
 */
export function pushTransform(transform){
  /**
   * @namespace TransformationAction
   * @property {Symbol} type
   * @property {TransformObject} transform
   */
  return {
    type: pushTransform.type,
    transform: transform
  }
}

pushTransform.type = Symbol('TRANSFORM_PUSH')