#version 120

uniform float time;
uniform float cval1;
uniform float grayout;
uniform float beat;
varying vec2 imageCoord;
varying vec2 textureCoord;
varying vec4 color;

uniform vec2 textureSize;
uniform vec2 imageSize;
uniform sampler2D sampler0;

uniform vec3 tint = vec3(1.0);

float rand( float val ) { return fract( sin(dot(vec2(val, val), vec2(12.9898,78.233))) * 43758.5453 ); }
float rgbToBrightness(vec3 rgb) {
    return 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
}
void main()
{
	vec2 uv = imageCoord / textureSize * imageSize;
	uv.x = uv.x;
	uv.y = uv.y;
	
	vec4 asd = texture2D(sampler0,uv);

	
	vec3 ass = vec3(
	asd.r,
	asd.g,
	asd.b
	);
	
	asd.r = mix(rgbToBrightness(ass), ass.r, clamp(tint.r, 0, 1));
	asd.g = mix(rgbToBrightness(ass), ass.g, clamp(tint.g, 0, 1));
	asd.b = mix(rgbToBrightness(ass), ass.b, clamp(tint.b, 0, 1));
	
	
	//gl_FragColor = texture2D(sampler0,uv);
	gl_FragColor = vec4(asd.rgb,1);
}
