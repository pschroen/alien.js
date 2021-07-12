export default /* glsl */`
precision highp float;

uniform sampler2D tMap;
uniform sampler2D tReflect;
uniform sampler2D tReflectBlur;

varying vec2 vUv;
varying vec4 vCoord;

void main() {
    vec2 reflectionUv = vCoord.xy / vCoord.w;

    vec4 dudv = texture2D(tMap, vUv);
    vec4 color = texture2D(tReflect, reflectionUv);

    vec4 blur;

    blur = texture2D(tReflectBlur, reflectionUv + dudv.rg / 256.0);
    color = mix(color, blur, clamp(dudv.g * 2.0 - 1.0, 0.0, 0.35));

    blur = texture2D(tReflectBlur, reflectionUv);
    color = mix(color, blur, clamp(dudv.r * 2.0 - 1.0, 0.0, 0.9));

    gl_FragColor = color * mix(0.6, 0.75, dudv.g);
}
`;
