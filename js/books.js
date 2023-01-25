export class Book {
  constructor(id, name, author, price, category, picture) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.category = category;
    this.picture = picture;
  }
}

export const bookArray = [
  new Book(1, "Maus", "Art Spiegelman", 5300, "Comic", "images/maus.jpg"),
  new Book(2, "Sandman 1", "Neil Gaiman", 4100, "Comic", "images/sandman.jpg"),
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
