import * as PIXI from 'pixi.js'
import vert from './topshadow.vert.js'
import frag from './topshadow.frag.js'

export default function TopEdgeFilter() {
  PIXI.Filter.call(this, vert, frag);
}

TopEdgeFilter.prototype = Object.create(PIXI.Filter.prototype);
TopEdgeFilter.prototype.constructor = TopEdgeFilter;