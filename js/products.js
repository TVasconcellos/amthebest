export function loadProducts() {
  const products = [
    { name: "Black Tee", img: "assets/products/tee1.jpg" },
    { name: "Navy Hoodie", img: "assets/products/hoodie1.jpg" },
    { name: "A&M Socks", img: "assets/products/socks.jpg" }
  ];

  const grid = document.getElementById("productGrid");

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.img}" />
      <h3>${p.name}</h3>
    `;

    grid.appendChild(div);
  });
}
