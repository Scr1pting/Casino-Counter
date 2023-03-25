const updateBtn = document.getElementById("update-btn");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");

const updateValues = () => {
  message.innerHTML = "";

  if (Number(counterInput.value)) {
    db.collection("users")
      .doc(usernameInput.value)
      .set({
        money: counterInput.value ? Number(counterInput.value) : 0,
      })
      .then(() => {
        message.innerHTML = "Änderung erfolgreich";
      })
      .catch((error) => {
        message.innerHTML = error;
      });
  } else {
    message.innerHTML = "Nur Zahlen sind möglich";
  }
};

usernameInput.addEventListener("keydown", () => {
  message.innerHTML = "";
});

counterInput.addEventListener("keydown", () => {
  message.innerHTML = "";
});

updateBtn.addEventListener("click", updateValues);

const addValue = () => {
  counterInput.value = parseInt(counterInput.value) + 1;
};

addBtn.addEventListener("click", addValue);

const subtractValue = () => {
  if (Number(counterInput.value) > 0) {
    counterInput.value =
      counterInput.value > parseInt(counterInput.value)
        ? parseInt(counterInput.value)
        : parseInt(counterInput.value) - 1;
  }
};

subtractBtn.addEventListener("click", subtractValue);
