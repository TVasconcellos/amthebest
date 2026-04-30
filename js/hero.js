import * as THREE from '../lib/three.module.js';

export function initHero() {
  const canvas = document.getElementById('hero-canvas');

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  // GEOMETRY (interactive mesh)
  const geometry = new THREE.PlaneGeometry(20, 20, 100, 100);

  const material = new THREE.MeshStandardMaterial({
    color: 0x0b1a2f,
    wireframe: true
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const light = new THREE.PointLight(0xffffff, 2);
  light.position.set(5, 5, 5);
  scene.add(light);

  camera.position.z = 5;

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5);
    mouseY = (e.clientY / window.innerHeight - 0.5);
  });

  function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.002;
    mesh.rotation.y += 0.003;

    mesh.rotation.x += mouseY * 0.01;
    mesh.rotation.y += mouseX * 0.01;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}
