import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';

export function initHero() {
  const canvas = document.getElementById('webgl');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Geometry
  const geometry = new THREE.PlaneGeometry(3, 3, 64, 64);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      mouse: { value: new THREE.Vector2(0, 0) }
    },
    vertexShader: `
      uniform float time;
      uniform vec2 mouse;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec3 pos = position;

        float dist = distance(uv, mouse);
        pos.z += sin(dist * 10.0 - time) * 0.1;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;

      void main() {
        float shade = smoothstep(0.2, 0.8, vUv.y);
        gl_FragColor = vec4(0.05, 0.1, 0.2, 1.0) * shade;
      }
    `,
    wireframe: true
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Mouse interaction
  window.addEventListener('mousemove', (e) => {
    material.uniforms.mouse.value.x = e.clientX / window.innerWidth;
    material.uniforms.mouse.value.y = 1 - (e.clientY / window.innerHeight);
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value += 0.03;
    renderer.render(scene, camera);
  }

  animate();

  // Resize
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}
