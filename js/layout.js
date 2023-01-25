const head = document.querySelector("head");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

function createLayout() {
  head.innerHTML += `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/mediaqueries.css">
  `;

  header.innerHTML = `
  <div class="logo">
  <a href="index.html">
      <img src="./images/logo_trans.png" alt="Logo de la librería">
  </a>
</div>
<ul class="menu">
  <li class="link">
      <a href="store.html"> TIENDA</a>
  </li>
  <li class="link">
      <a href="login.html"> LOG IN</a>
  </li>
  <li class="link">
      <a href="register.html">REGISTRARSE</a>
  </li>
  <li class="link">
      <a href="cart.html">CARRITO (<span id="cart-number-sidebar"></span>)</a>
  </li>
</ul>
<div class="menu-content account-links">
  <div class="link">
      <a href="store.html"> TIENDA</a>
  </div>
  <div class="link">
      <a href="login.html"> LOG IN</a>
  </div>
  <div class="link">
      <a href="register.html">REGISTRARSE</a>
  </div>
  <div class="link">
  <a href="cart.html">CARRITO (<span id="cart-number-header"></span>)</a>
  </div>
</div>
<div class="menu-content menu-icon">
  <i class="fa-solid fa-bars"></i>
</div>
`;

  footer.innerHTML = `
  © 2022 - Floppy Seibert
  `;

  const cartNumHead = document.querySelector("#cart-number-header");
  const cartNumSide = document.querySelector("#cart-number-sidebar");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartNumHead.innerHTML = cart.length;
  cartNumSide.innerHTML = cart.length;
}

this.createLayout();
