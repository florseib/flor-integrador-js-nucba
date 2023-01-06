const menuButton = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

function init() {
  menuButton.addEventListener("click", toggleMenu);
}

const toggleMenu = () => {
  menu.classList.toggle("show-menu");
};

this.init();
