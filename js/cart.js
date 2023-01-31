import { bookArray } from "./books.js";
import { CartItem } from "./cartitem.js";

const cartNumHead = document.querySelector("#cart-number-header");
const cartNumSide = document.querySelector("#cart-number-sidebar");
const buyBtnContainer = document.querySelector(".buy-btn-container");

const cartContainer = document.querySelector(".cart-container");
var cart;

function init() {
  // localStorage.clear();

  // cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  renderBooks();
  cartContainer.addEventListener("click", deleteProduct);
  cartContainer.addEventListener("click", addProduct);
}

function renderBooks() {
  cartContainer.innerHTML = "";
  if (cart.length !== 0) {
    cart.forEach((item) => {
      const book = bookArray.find((book) => book.id === parseInt(item.id));

      cartContainer.innerHTML += `<div class="cart-card" id="card-${book.id}" value="${book.id}">
          <div class="card-content">
            <div class="book-info">
              <h2>${book.name}</h2>
              <p>Autor: ${book.author}</p>
              <p>Precio: $${book.price}</p>
              <p>Categoría: ${book.category}</p>
              <p>Cantidad: <span id="amount-${book.id}">${item.amount}</span></p>
            </div>
            <div class="btn-container">
              <button class="btn-add" value="${book.id}" id="book-add-${book.id}">Agregar</button>
              <button class="btn-delete" value="${book.id}" id="book-remove-${book.id}">Quitar</button>
            </div>
          </div>
          <div class="image-container">
              <img src="${book.picture}">
          </div>
      </div>`;
    });
    // buyBtnContainer.classList.remove('hidden')
  } else {
    cartContainer.innerHTML += `<p>Tu carrito se encuentra vacío actualmente.</p>`;
    buyBtnContainer.classList.add("hidden");
  }
}

const deleteProduct = (e) => {
  if (!e.target.classList.contains("btn-delete")) return;
  // const addedBook = bookArray.find((x) => x.id == e.target.value);
  const deletedElement = cart.find((x) => x.id == e.target.value);
  if (deletedElement) {
    if (deletedElement.amount == 1) {
      const deleteCard = document.querySelector("#card-" + deletedElement.id);
      deleteCard.parentElement.removeChild(deleteCard);

      const index = cart.indexOf(deletedElement);

      cart.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(cart));

      cartNumHead.innerHTML = cart.length;
      cartNumSide.innerHTML = cart.length;

      if (cart.length === 0) {
        cartContainer.innerHTML += `<p>Tu carrito se encuentra vacío actualmente.</p>`;
        buyBtnContainer.classList.add("hidden");
      }
    } else {
      deletedElement.amount--;

      localStorage.setItem("cart", JSON.stringify(cart));
      const amountCounter = document.querySelector(
        "#amount-" + deletedElement.id
      );
      amountCounter.innerHTML = deletedElement.amount;
    }
  }
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  // const addedBook = bookArray.find((x) => x.id == e.target.value);
  const addedElement = cart.find((x) => x.id == e.target.value);
  if (addedElement) {
    addedElement.amount++;

    localStorage.setItem("cart", JSON.stringify(cart));
    const amountCounter = document.querySelector("#amount-" + addedElement.id);
    amountCounter.innerHTML = addedElement.amount;
  }
};

init();
