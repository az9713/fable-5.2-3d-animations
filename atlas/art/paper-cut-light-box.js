// Art style 21: Paper-cut light box. Input D (depth).
// The depth is cut into 8 paper sheets with white cut edges. A light behind the box makes the far sheets glow warm.
window.ARTS = window.ARTS || {};
ARTS['paper-cut-light-box'] = {
  id: 'paper-cut-light-box', name: 'Paper-cut light box', group: 'The depth is the material', inputs: 'D',
  post: {
    fragment: `
      float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      // sheet index 0 (nearest) to 7, and 8 for the empty background (the lamp). Sheets span 0.8 to 1.3 times the distance to the look target.
      float sheet(vec2 uv){
        if (texture2D(tDepth, uv).x > 0.9999) return 8.0;
        return min(floor(clamp((linDepth(uv) / uFocus - 0.8) / 0.5, 0.0, 1.0) * 8.0), 7.0);
      }
      vec4 postFX(vec2 uv){
        vec2 px = 1.0 / uRes, fc = uv * uRes;
        float k = sheet(uv), f = k / 8.0;
        vec3 warm = vec3(1.0, 0.62, 0.28);
        vec3 col;
        if (k > 7.5) {
          float v = length((uv - 0.5) * vec2(1.4, 1.0));
          col = vec3(1.0, 0.58, 0.22) * (1.15 - 1.0 * v * v);   // the lamp
        } else {
          // flat sheet colour: posterised, pulled toward matt paper
          vec3 sc = pow(clamp(texture2D(tColor, uv).rgb, 0.0, 1.0), vec3(1.0 / 2.2));
          sc = floor(sc * 3.0 + 0.5) / 3.0;
          sc = pow(mix(sc, vec3(dot(sc, vec3(0.333))), 0.2), vec3(2.2));
          col = sc * (mix(0.42, 1.0, f) * (0.94 + 0.06 * mod(k, 2.0))) * mix(vec3(1.0), warm, 0.35 * f) + warm * pow(f, 1.6) * 0.55;   // far sheets glow warm
          // shadow of nearer sheets, thrown up and to the right, onto the sheet behind
          float sh = 0.0;
          for (int i = 1; i <= 3; i++) sh += clamp(k - sheet(uv + vec2(-1.0, -1.0) * px * 9.0 * float(i)), 0.0, 2.0) / 2.0;
          col *= 1.0 - 0.85 * sh / 3.0;
          // white cut edge where a sheet ends against a farther one
          float edge = 0.0;
          for (int i = 0; i < 8; i++) {
            float a = float(i) * 0.7854;
            edge = max(edge, step(k + 0.5, sheet(uv + vec2(cos(a), sin(a)) * px * 3.6)));
          }
          col = mix(col, vec3(1.0, 0.97, 0.9) * 1.1, edge * 0.92);
        }
        col *= 0.96 + 0.08 * h21(floor(fc / 2.0));   // paper tooth
        return vec4(col * 1.6, 1.0);
      }`,
  },
};
