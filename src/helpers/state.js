export default {

  /**
   * The transformations object is managed by the tracker reducer
   */
  transformations: {
    /**
     * @namespace TransformObject
     * 
     * @property {object} translate - The current global translation object
     * @property {number} translate.x - The global x translation coord
     * @property {number} translate.y - The global y translation coord
     * @property {number} translate.z - The global z translation coord
     * @property {number} rotation - The global rotation in degrees
     */
    present: {
      translate: { x:0, y:0, z:0 },
      rotation: 0
    },
    past: [],
    future: []
  }

}