const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var email = document.getElementById("loginEmail").value;
        var password = document.getElementById("loginPassword").value;

        if (email.toLowerCase() === "admin@admin" && password === "admin") {
            window.location.href = "../templates/index.html";
        } else {
            alert("Identifiants incorrects. Veuillez réessayer.");
        }
    });
});
