"use strict";

import site from './helpers/site'
import * as PIXI from 'pixi.js'
import logoImage from './assets/codelamp-logo-lq.png'
import TronWidget from './pixi/widgets/tron'

let app = new PIXI.Application(800, 600, {
  antialias: true,
  transparent: true,
  resolution: window.devicePixelRatio,
  autoResize: true,
  backgroundColor : 0xffffff
});

let shape = new TronWidget({
  colour: 0x00d7ff,
  shadow: 0x007d94,
  data: [
    -50, -50,
    50, -50,
    50, -10,
    40, -10,
    40, -40,
    -40, -40,
    -40, 40,
    40, 40,
    40, 10,
    50, 10,
    50, 50,
    -50, 50,
    -50, -50
  ]
});
shape.scale.x = shape.scale.y = 6;

let image = new PIXI.Sprite.fromImage(logoImage, true);
    image.anchor.y = image.anchor.x = 0.5;
    image.scale.y = image.scale.x = 0.5;

function resize (){
  var w = window.innerWidth;
  var h = window.innerHeight;
  image.position.x = shape.position.x = w / 2;
  image.position.y = shape.position.y = h / 2;
  app.renderer.resize(w, h);
};

app.stage.addChild(image);
app.stage.addChild(shape);

app.ticker.add(function(delta) {
  if ( shape ) {
    shape.rotation += 0.001 * delta;
  }
});

// add the view
document.body.appendChild(app.view);
window.onresize = resize; resize();