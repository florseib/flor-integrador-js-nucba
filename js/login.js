const errorNotif = document.querySelector(".error-notif");
const loginButton = document.querySelector("#login-button");

function init() {
  loginButton.addEventListener("click", login);
}

const showRedNotification = (msg) => {
  errorNotif.classList.add("active-notif");
  errorNotif.textContent = msg;
  setTimeout(() => {
    errorNotif.classList.remove("active-notif");
  }, timeoutTime);
};

const login = (e) => {
  e.preventDefault();
  showRedNotification(
    "Lo sentimos, esta funcionalidad no se encuentra disponible actualmente."
  );
};

init();
