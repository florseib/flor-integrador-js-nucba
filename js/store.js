import { bookArray } from "./books.js";
import { CartItem } from "./cartitem.js";

const bookContainer = document.querySelector(".book-container");
const categorySelect = document.querySelector("#category-select");

const cartNumHead = document.querySelector("#cart-number-header");
const cartNumSide = document.querySelector("#cart-number-sidebar");
const addNotif = document.querySelector(".add-notif");

var categoryList;
var cart;
var canAdd = true;

function init() {
  // localStorage.clear();

  // cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  categorySelect.addEventListener("change", changeSelect);

  bookArray.sort((a, b) => a.name.localeCompare(b.name));
  createCatList();
  renderBooks(bookArray);
  bookContainer.addEventListener("click", addProduct);
}

var changeSelect = (e) => {
  let books;
  if (categorySelect.value === "Todos") {
    books = bookArray;
  } else {
    books = bookArray.filter((x) => x.category === categorySelect.value);
  }
  renderBooks(books);
};

function createCatList() {
  categoryList = bookArray.map((element) => element.category);
  categoryList = ["Todos", ...new Set(categoryList)];
  categoryList.forEach((cat) => {
    categorySelect.innerHTML += ` <option value="${cat}">${cat}</option>`;
  });
}

function renderBooks(books) {
  bookContainer.innerHTML = "";
  books.forEach((book) => {
    const id = "button-" + book.id;
    bookContainer.innerHTML += `<div class="book-card">
    <div class="img-container">
        <img src="${book.picture}">
    </div>
    <div class="book-info">
      <h2>${book.name}</h2>
      <p>Autor: ${book.author}</p>
      <p>Precio: $${book.price}</p>
      <p>Categoría: ${book.category}</p>
    </div>
    <div class="btn-container">
      <button class="btn-add" value="${book.id}" id="${id}">Agregar al carrito</button>
    </div>
</div>`;

    // document.querySelector("#" + id).addEventListener("click", test);
  });
}

const addProduct = (e) => {
  if (canAdd) {
    canAdd = false;
    if (!e.target.classList.contains("btn-add")) return;
    // const addedBook = bookArray.find((x) => x.id == e.target.value);
    const hasItem = cart.find((x) => x.id == e.target.value);
    if (!hasItem) {
      const cartItem = new CartItem(e.target.value, 1);
      cart = [...cart, cartItem];

      localStorage.setItem("cart", JSON.stringify(cart));

      cartNumHead.innerHTML = cart.length;
      cartNumSide.innerHTML = cart.length;
      showNotification("El producto fue agregado al carrito");
    } else {
      hasItem.amount++;
      showNotification("Se agregó una unidad del producto al carrito");
    }
    canAdd = true;
  }
};

const showNotification = (msg) => {
  addNotif.classList.add("active-notif");
  addNotif.textContent = msg;
  setTimeout(() => {
    addNotif.classList.remove("active-notif");
  }, 1500);
};

// const test2 = (e) => {
//   if (!e.target.classList.contains("btn-add")) return;
//   console.log(e);
// };

// const test = (e) => {
//   console.log(e);
// };

init();
