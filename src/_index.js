"use strict";

/**
 * @file example showing off abilities of this starter
 */

import example from './decorators/example';

let testObject = {

  @example()
  testMethod(a){
    console.log(a, this);
  }
  
};

let b = ::testObject.testMethod;

b();

let obj = {};

export default obj;
