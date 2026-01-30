function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Registered successfully!");
    window.location.href = "index.html";
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if(user === storedUser && pass === storedPass) {
        window.location.href = "form.html";
    } else {
        alert("Invalid login details");
    }
}

function submitForm() {
    alert("Successfully submitted");
}

function cancelForm() {
    document.querySelectorAll("input").forEach(input => input.value = "");
}
