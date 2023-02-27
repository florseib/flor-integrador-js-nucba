const errorNotif = document.querySelector(".error-notif");
const registerButton = document.querySelector("#register-button");
const timeoutTime = 1500;

function init() {
  registerButton.addEventListener("click", register);
}

const showRedNotification = (msg) => {
  errorNotif.classList.add("active-notif");
  errorNotif.textContent = msg;
  setTimeout(() => {
    errorNotif.classList.remove("active-notif");
  }, timeoutTime);
};

const register = (e) => {
  e.preventDefault();
  showRedNotification(
    "Lo sentimos, esta funcionalidad no se encuentra disponible actualmente."
  );
};

init();
