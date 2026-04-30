import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const canvas = document.getElementById('bg');

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();

const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);

/* SHADER */
const material = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) }
  },
  vertexShader: `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;

    void main() {
      vec2 uv = gl_FragCoord.xy / vec2(${window.innerWidth.toFixed(1)}, ${window.innerHeight.toFixed(1)});

      float d = distance(uv, uMouse);

      float glow = 0.12 / (d + 0.25);

      vec3 base = vec3(0.02, 0.025, 0.04);
      vec3 accent = vec3(0.05, 0.12, 0.3);

      vec3 color = base + glow * accent;

      // slow subtle movement
      color += sin(uv.x * 8.0 + uTime * 0.6) * 0.01;

      gl_FragColor = vec4(color, 1.0);
    }
  `
});

const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2,2), material);
scene.add(mesh);

/* MOUSE */
const target = new THREE.Vector2(0.5, 0.5);

window.addEventListener('mousemove', (e) => {
  target.x = e.clientX / window.innerWidth;
  target.y = 1 - (e.clientY / window.innerHeight);
});

/* LOOP */
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  material.uniforms.uTime.value = clock.getElapsedTime();
  material.uniforms.uMouse.value.lerp(target, 0.05);

  renderer.render(scene, camera);
}

animate();

/* RESIZE */
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});
