const bookContainer = document.querySelector(".book-container");
const categorySelect = document.querySelector("#category-select");

class Book {
  constructor(id, name, author, price, category, picture) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.category = category;
    this.picture = picture;
  }
}

var bookArray;
var categoryList;

function init() {
  categorySelect.addEventListener("change", changeSelect);

  createBookArray();
  createCatList();
  renderBooks(bookArray);
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

function createBookArray() {
  bookArray = [
    new Book(1, "Maus", "Art Spiegelman", 5300, "Comic", "images/maus.jpg"),
    new Book(
      2,
      "Sandman 1",
      "Neil Gaiman",
      4100,
      "Comic",
      "images/sandman.jpg"
    ),
    new Book(3, "Watchmen", "Alan Moore", 5500, "Comic", "images/watchmen.jpg"),
    new Book(
      4,
      "Il deserto dei tartari",
      "Dino Buzzati",
      5000,
      "Novela",
      "images/deserto.jpg"
    ),
    new Book(
      5,
      "El señor de los anillos",
      "J.R.R. Tolkien",
      5000,
      "Fantasía",
      "images/lotr.jpg"
    ),
    new Book(
      6,
      "The Black Swan",
      "Nassim Taleb",
      7900,
      "Filosofía",
      "images/blackswan.jpg"
    ),
    new Book(
      7,
      "Tractatus Logico-Philosophicus",
      "Ludwig Wittgenstein",
      4100,
      "Filosofía",
      "images/tractatus.jpg"
    ),
  ];

  bookArray.sort((a, b) => a.name.localeCompare(b.name));
}

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
      <button value="${book.id}" id="button-${book.id}">Agregar al carrito</button>
    </div>
</div>`;

    document
      .querySelector("#button-" + book.id)
      .addEventListener("click", test);
  });
}

const test = (e) => {
  console.log(e);
};

this.init();
