const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "1234" && password === "1234") {
        alert("You have successfully logged in.");
        window.location.href = "갤러리.html";
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});
