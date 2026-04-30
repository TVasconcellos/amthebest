import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

/* ================= HERO BACKGROUND ================= */
/*
ELI5:
We create a grid (like a fabric) and slightly move it.
The mouse acts like a magnet pulling the surface.
*/

const canvas = document.getElementById('bg');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

/* GRID GEOMETRY */
const geometry = new THREE.PlaneGeometry(3, 3, 120, 120);

const material = new THREE.MeshBasicMaterial({
  color: 0x1a2a4a,
  wireframe: true,
  transparent: true,
  opacity: 0.25
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/* MOUSE */
const target = new THREE.Vector2(0,0);
const current = new THREE.Vector2(0,0);

window.addEventListener('mousemove', (e) => {
  target.x = (e.clientX / window.innerWidth - 0.5) * 2;
  target.y = (e.clientY / window.innerHeight - 0.5) * 2;
});

/* ANIMATION */
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const time = clock.getElapsedTime();

  // smooth follow
  current.lerp(target, 0.08);

  const pos = geometry.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);

    // base wave (slow)
    let z = Math.sin(x * 2 + time * 0.5) * 0.05;
    z += Math.sin(y * 2 + time * 0.5) * 0.05;

    // mouse influence (localized)
    let dist = Math.sqrt((x - current.x)**2 + (y + current.y)**2);
    z += 0.2 / (dist * 5 + 1);

    pos.setZ(i, z);
  }

  pos.needsUpdate = true;

  renderer.render(scene, camera);
}

animate();

/* ================= PRODUCTS ================= */
/*
ELI5:
We store products in a list and draw them on screen.
*/

const productsData = [
  { name: "Core Tee", price: 35, type: "tshirt", img: "assets/products/p1.jpg" },
  { name: "Heavy Hoodie", price: 85, type: "hoodie", img: "assets/products/p2.jpg" },
  { name: "Classic Sweat", price: 70, type: "sweatshirt", img: "assets/products/p3.jpg" },
  { name: "Black Socks", price: 15, type: "other", img: "assets/products/p4.jpg" },
  { name: "White Tee", price: 30, type: "tshirt", img: "assets/products/p5.jpg" },
  { name: "Zip Hoodie", price: 90, type: "hoodie", img: "assets/products/p6.jpg" },
  { name: "Grey Sweat", price: 65, type: "sweatshirt", img: "assets/products/p7.jpg" },
  { name: "Sport Socks", price: 18, type: "other", img: "assets/products/p8.jpg" },
  { name: "Oversized Tee", price: 40, type: "tshirt", img: "assets/products/p9.jpg" },
  { name: "Premium Hoodie", price: 110, type: "hoodie", img: "assets/products/p10.jpg" }
];

const container = document.getElementById("products");

function renderProducts(data) {
  container.innerHTML = "";

  data.forEach(p => {
    const el = document.createElement("div");
    el.className = "product";

    el.innerHTML = `
      <img src="${p.img}" />
      <h3>${p.name}</h3>
      <span>€${p.price}</span>
    `;

    container.appendChild(el);
  });
}

renderProducts(productsData);
