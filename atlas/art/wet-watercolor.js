// Art style 1: Wet watercolor. Inputs C D B (colour, depth, beat times).
// At each beat the frame is wet: pigment bleeds across the object edges. As it dries it settles into the shapes and leaves a dark rim.
window.ARTS = window.ARTS || {};
ARTS['wet-watercolor'] = {
  id: 'wet-watercolor', name: 'Wet watercolor', group: 'The medium changes with time', inputs: 'C D B',
  post: {
    fragment: `
      float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
      float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vn(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
      float dd(vec2 uv){ return min(linDepth(uv), uFocus * 3.0); }
      float lum(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
      vec4 postFX(vec2 uv){
        vec2 px = 1.0 / uRes, fc = uv * uRes;
        float age = beatAge();
        float wet = 1.0 - smoothstep(0.0, 1.7, age);          // 1 at a beat, 0 when dry
        wet *= wet * (3.0 - 2.0 * wet) * 0.8;
        // wobbly edges: a slow noise moves the lookup; more when wet
        vec2 q = uv + (vec2(fbm(fc * 0.011), fbm(fc * 0.011 + 31.7)) - 0.5) * (4.0 + 14.0 * wet) * px;
        float d0 = dd(q);
        // bilateral wash: when wet the depth tolerance is wide, so pigment bleeds over the object edges; when dry it stops at them
        float R = 3.0 + 17.0 * wet, tol = mix(0.05, 1.3, wet);
        vec3 acc = vec3(0.0); float ws = 0.0;
        for (int i = 0; i < 28; i++) {
          float a = float(i) * 2.39996 + h21(fc) * 0.6, r = sqrt((float(i) + 0.5) / 28.0) * R;
          vec2 s = q + vec2(cos(a), sin(a)) * r * px;
          float w = exp(-abs(dd(s) - d0) / (d0 * tol));
          acc += texture2D(tColor, s).rgb * w; ws += w;
        }
        vec3 wash = acc / max(ws, 1e-4);
        // blooms: uneven pigment while wet
        wash *= 1.0 + 0.45 * wet * (fbm(fc * 0.02 + 3.0) - 0.5);
        // glazes: soft bands of tone
        wash = mix(wash, floor(wash * 5.0 + 0.5) / 5.0, 0.3);
        float L = lum(wash);
        wash = mix(vec3(L), wash, 1.6);
        // rim: pigment pools along depth and colour edges, strongest when dry
        float e = 0.0, g = 0.0;
        for (int i = 0; i < 4; i++) {
          vec2 o = (i == 0 ? vec2(1.0, 0.0) : i == 1 ? vec2(-1.0, 0.0) : i == 2 ? vec2(0.0, 1.0) : vec2(0.0, -1.0)) * px * 3.2;
          e = max(e, abs(dd(q + o) - d0) / d0);
          g = max(g, length(texture2D(tColor, q + o).rgb - texture2D(tColor, q).rgb));
        }
        float rim = max(smoothstep(0.012, 0.06, e), smoothstep(0.08, 0.35, g) * 0.6);
        rim *= (0.6 + 0.4 * fbm(fc * 0.05)) * (1.0 - 0.7 * wet);
        // paper: grain, fibres, and pigment settling into the grain
        float grain = fbm(fc * 0.8) * 0.6 + vn(fc * 0.35) * 0.4;
        vec3 paper = vec3(0.975, 0.955, 0.915) * (0.9 + 0.16 * grain);
        vec3 glaze = clamp(wash, 0.0, 1.0);
        glaze = pow(glaze, vec3(1.9));
        glaze *= 1.0 - 0.8 * rim * (1.0 - 0.3 * glaze);
        glaze *= 1.0 - 0.7 * (grain - 0.5) * (1.1 - L);
        glaze = mix(vec3(1.0), glaze, 0.92);
        return vec4(paper * glaze * 2.2, 1.0); // the kit tone-maps after this, so paper white needs about 2.2
      }`,
  },
};
