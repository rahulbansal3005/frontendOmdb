const apiURL = "https://omdbrecent.onrender.com";

function goToSignup() {
  window.location.href = "signup.html";
}

function goToLogin() {
  window.location.href = "login.html";
}
async function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  try {
    const response = await fetch(`${apiURL}/api/login`, requestOptions);
    const data = await response.json();

    const tokenExpiration = data.exp * 1000; // Convert to milliseconds
    localStorage.setItem("tokenExpiration", tokenExpiration);
    localStorage.setItem("token", data.token);
    const loginUrl = window.location.pathname.replace(
      "login.html",
      "index.html"
    );
    window.location.href = loginUrl;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function handleSignup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  try {
    const response = await fetch(`${apiURL}/api/signup`, requestOptions);
    console.log(response);
    const data = await response.json();
    console.log(data);

    const loginUrl = window.location.pathname.replace(
      "signup.html",
      "login.html"
    );
    window.location.href = loginUrl;
  } catch (error) {
    console.error("Error:", error);
  }
}
