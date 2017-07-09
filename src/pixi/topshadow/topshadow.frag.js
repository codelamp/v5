export default `precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;
vec2 px;

void main(void) {
    px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);
    vec2 displaced;
    vec4 foundColor;
    displaced.x = vTextureCoord.x;
    displaced.y = vTextureCoord.y;
    gl_FragColor = vec4(0.0);
    for ( int i=0; i<4; i++) {
      displaced.y -= 1.0 * px.y;
      foundColor = texture2D(uSampler, displaced);
      if ( foundColor.a == 0.0 ) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        break;
      }
    }
}`