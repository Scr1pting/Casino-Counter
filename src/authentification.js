const userEmail = document.getElementById("email-input");
const userPassword = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");

// Authentication
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("host").classList.remove("hidden");
    document.getElementById("login").classList.add("hidden");
  } else {
    document.getElementById("host").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
  }
});

// Login
const login = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail.value, userPassword.value)
    .catch(function (error) {
      // Display error message to user
      alert("Error: " + error.message);
    });
};

userEmail.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    login();
  }
});

userPassword.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    login();
  }
});

loginBtn.addEventListener("click", login);
