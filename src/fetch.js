const database = db.collection("users");
const usernameInput = document.getElementById("username-input");
const loadBtn = document.getElementById("load-btn");
const counterInput = document.getElementById("counter-input");
const counter = document.getElementById("counter");
const message = document.getElementById("message");

const getAmount = () => {
  message.innerHTML = "";
  if (counterInput) {
    counterInput.value = "";
  } else {
    counter.innerHTML = "";
  }

  database
    .doc(String(usernameInput.value).toLowerCase())
    .get()
    .then((doc) => {
      if (doc.exists) {
        if (counterInput) {
          counterInput.value = doc.data().money;
          counterInput.focus();
        } else {
          counter.innerHTML = doc.data().money;
        }
      } else {
        message.innerHTML = "Der Nutzer konnte leider nicht gefunden werden";
      }
    })
    .catch((error) => {
      message.innerHTML = error;
    });
};

usernameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (counterInput ? !counterInput.value : true)) {
    getAmount();
  }
});

loadBtn.addEventListener("click", getAmount);
