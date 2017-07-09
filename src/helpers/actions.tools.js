const actionTools = {
  
  is: function(action){
    return ( action.type === this.type )
  },
  
  enhanceCreator: function(actionCreator, typeHint){
    actionCreator.is = actionTools.is
    actionCreator.type = Symbol(typeHint)
    return actionCreator;
  }
  
}

export default actionTools