localStorage.setItem("username", "root");
localStorage.setItem("password", "admin");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
    window.location.href = "test.html";
  } else {
    alert("Incorrect username or password");
  }
});
