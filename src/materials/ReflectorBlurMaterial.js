import { NoBlending, RawShaderMaterial, Uniform, Vector2 } from 'three';

import vertexShader from '../shaders/ReflectorBlurPass.vert.js';
import fragmentShader from '../shaders/ReflectorBlurPass.frag.js';

export class ReflectorBlurMaterial extends RawShaderMaterial {
    constructor() {
        super({
            uniforms: {
                tMap: new Uniform(null),
                uDirection: new Uniform(new Vector2(1, 0)),
                uResolution: new Uniform(new Vector2())
            },
            vertexShader,
            fragmentShader,
            blending: NoBlending,
            depthWrite: false,
            depthTest: false
        });
    }
}
