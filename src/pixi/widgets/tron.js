import * as PIXI from 'pixi.js'
import TopShadowFilter from '../topshadow/topshadow'

/**
 *
 */
let drawRect = function(gfx, col, x0, y0, x1, y1){
  return gfx.beginFill(col)
  .drawRect(x0, y0, x1, y1)
  .closePath();
}

/**
 *
 */
let drawPoly = function(gfx, col, data){
  return gfx.beginFill(col).drawPolygon(data).closePath();
};

/**
 * Much of the Codelamp v5 interface will be built from Tron-style indents
 */
export default function TronWidget(options){

  PIXI.Sprite.call(this);

  this.i = {};
  this.i.graphics = drawRect(new PIXI.Graphics(), options.colour, -50, -50, 100, 100);
  this.i.mask = drawPoly(new PIXI.Graphics(), 0x000000, options.data);
  this.i.shadow = drawPoly(new PIXI.Graphics(), options.shadow, options.data);
  this.i.shadow.filters = [
    new TopShadowFilter(),
    new PIXI.filters.BlurFilter(3)
  ];

  this.i.shapeInner = new PIXI.Sprite();
  this.i.shapeInner.addChild(this.i.graphics);
  this.i.shapeInner.addChild(this.i.shadow);
  this.i.shapeInner.mask = this.i.mask;

  this.addChild(this.i.mask);
  this.addChild(this.i.shapeInner);

};
TronWidget.prototype = Object.create(PIXI.Sprite.prototype);
TronWidget.prototype.constructor = TronWidget;