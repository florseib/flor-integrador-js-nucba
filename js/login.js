const errorNotif = document.querySelector(".error-notif");
const loginButton = document.querySelector("#login-button");
const timeoutTime = 1500;
var showNotif = true;

function init() {
  loginButton.addEventListener("click", login);
}

const showRedNotification = (msg) => {
  if (showNotif) {
    showNotif = false;
    errorNotif.classList.add("active-notif");
    errorNotif.textContent = msg;
    setTimeout(() => {
      errorNotif.classList.remove("active-notif");
      showNotif = true;
    }, timeoutTime);
  }
};

const login = (e) => {
  e.preventDefault();
  showRedNotification(
    "Lo sentimos, esta funcionalidad no se encuentra disponible actualmente."
  );
};

init();
