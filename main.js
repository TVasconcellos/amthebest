import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const canvas = document.getElementById('webgl');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/* GEOMETRY */
const geometry = new THREE.PlaneGeometry(3, 3, 128, 128);

/* SHADER MATERIAL (this is the upgrade) */
const material = new THREE.ShaderMaterial({
  wireframe: true,
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) }
  },
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;

    varying vec2 vUv;

    void main() {
      vUv = uv;

      vec3 pos = position;

      float dist = distance(uv, uMouse);

      pos.z += sin(pos.x * 3.0 + uTime) * 0.1;
      pos.z += sin(pos.y * 3.0 + uTime) * 0.1;

      pos.z += (0.2 / (dist + 0.1));

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(0.05, 0.1, 0.2, 0.4);
    }
  `
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/* MOUSE */
const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX / window.innerWidth;
  mouse.y = 1.0 - (e.clientY / window.innerHeight);
});

/* ANIMATE */
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  material.uniforms.uTime.value = clock.getElapsedTime();

  // smooth interpolation (premium feel)
  material.uniforms.uMouse.value.lerp(mouse, 0.05);

  renderer.render(scene, camera);
}

animate();

/* RESIZE */
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
