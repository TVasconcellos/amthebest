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

  // tighter falloff (closer to cursor)
  float glow = 0.18 / (d * 4.0 + 0.15);

  vec3 base = vec3(0.015, 0.02, 0.035);
  vec3 accent = vec3(0.08, 0.18, 0.45);

  vec3 color = base + glow * accent;

  // slower movement
  color += sin(uv.x * 6.0 + uTime * 0.25) * 0.008;

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
  material.uniforms.uMouse.value.lerp(target, 0.12);

  renderer.render(scene, camera);
}

animate();

/* RESIZE */
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const productsData = [
  { name: "Core Tee", price: 35, type: "tshirt", img: "p1.jpg" },
  { name: "Heavy Hoodie", price: 85, type: "hoodie", img: "p2.jpg" },
  { name: "Classic Sweat", price: 70, type: "sweatshirt", img: "p3.jpg" },
  { name: "Black Socks", price: 15, type: "other", img: "p4.jpg" },
  { name: "White Tee", price: 30, type: "tshirt", img: "p5.jpg" },
  { name: "Zip Hoodie", price: 90, type: "hoodie", img: "p6.jpg" },
  { name: "Grey Sweat", price: 65, type: "sweatshirt", img: "p7.jpg" },
  { name: "Sport Socks", price: 18, type: "other", img: "p8.jpg" },
  { name: "Oversized Tee", price: 40, type: "tshirt", img: "p9.jpg" },
  { name: "Premium Hoodie", price: 110, type: "hoodie", img: "p10.jpg" }
];

const container = document.getElementById("products");
const filterEl = document.getElementById("filter");
const sortEl = document.getElementById("sort");

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

function update() {
  let data = [...productsData];

  const filter = filterEl.value;
  const sort = sortEl.value;

  if (filter !== "all") {
    data = data.filter(p => p.type === filter);
  }

  if (sort === "price-asc") data.sort((a,b)=>a.price-b.price);
  if (sort === "price-desc") data.sort((a,b)=>b.price-a.price);
  if (sort === "name") data.sort((a,b)=>a.name.localeCompare(b.name));

  renderProducts(data);
}

filterEl.addEventListener("change", update);
sortEl.addEventListener("change", update);

renderProducts(productsData);
