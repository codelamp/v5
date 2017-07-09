/**
 * @param {TransformationAction} triggerAction - the transformation action that is applying
 */
export function animationOccurring(triggerAction){
  return {
    type: animationOccurring.type,
    action: triggerAction
  }
}

export function animationComplete(triggerAction){
  return {
    type: animationComplete.type,
    action: triggerAction
  }
}

animationOccurring.type = Symbol('ANIMATION_OCCURRING')
animationComplete.type = Symbol('ANIMATION_COMPLETE')