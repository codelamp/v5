import browserify from 'browserify'
import babelify from 'babelify'
import imgurify from 'imgurify'
import fs from 'fs'
import Promise from 'promise'

/**
 * Take that promise, and make it better
 * - entends the standard Promise object with shortcut methods
 *
 * @note if you trigger a subfunction of Promise that creates
 * a new Promise object, it won't have these shortcut methods
 */
let newPromise = function(){
  let resolve, reject
  let p = new Promise(function(res, rej){
    resolve = res
    reject = rej
  })
  p.resolve = resolve
  p.reject = reject
  return p;
}

/**
 * Simple packaging using browserify and babel
 */
let packager = (function({ bundler, output, presets }){
  let bundle, p = newPromise();
  bundler = bundler.transform(babelify, {
    presets: ['es2015', 'stage-2'],
    plugins: ['transform-decorators-legacy', 'transform-function-bind']
  })
  bundler = bundler.transform(imgurify);
  bundle = bundler.bundle()
  bundle.on('error', function(e){ p.reject(e) })
  output.on('finish', function(){ p.resolve() })
  bundle.pipe(output)
  return p
})({
  bundler: browserify([__dirname + '/src/index.js']),
  output: fs.createWriteStream(__dirname + '/build/bundle.js')
})

// listen out for the changes
packager
  .then(function(){
    console.log('all packaged up and ready to go...');
  })
  .catch(function(e){
    console.warn(e);
  })
;