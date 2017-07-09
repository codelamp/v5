'use strict';

import { isEqual } from 'lodash'

/**
 * Replace the function with a wrapper
 */
function handleDescriptor(target, key, descriptor) {
  const callback = descriptor.value;
  if (typeof callback !== 'function') {
    throw new SyntaxError('Only functions can be debounced');
  }
  return {
    ...descriptor,
    value() {
      console.log('I have been @example-d');
      callback.apply(this, arguments);
    }
  };
}

/**
 * Handle the fact that decorators can (currently) be called
 * either without-arguments or with-arguments.
 */
export default function example(...args) {
  // without args
  if ( args.length === 3 && args[0] && typeof args[1] == 'string' && typeof args[2] == 'object' ) {
    // detect that the argument format is context, key, descriptor
    let desc = Object.getOwnPropertyDescriptor(args[0], args[1]);
    if ( isEqual(desc, args[2]) ) {
      return handleDescriptor(...arguments)
    }
  }
  // with args
  return function () {
    return handleDescriptor(...arguments, args);
  };
}
