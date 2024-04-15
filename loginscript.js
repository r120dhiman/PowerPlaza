function signIn() {
    document.getElementById("formTitle").innerText = "Sign In";
    document.getElementById("nameField").style.display = "none";
    document.querySelector(".btn-secondary").classList.remove("btn-primary");
    document.querySelector(".btn-secondary").classList.add("btn-secondary");
    document.querySelector(".btn-primary").classList.remove("btn-secondary");
    document.querySelector(".btn-primary").classList.add("btn-primary");
    document.querySelector(".back-arrow").style.display = "inline-block";
    document.querySelector(".btn-secondary").style.animation = "fadeOut 0.5s forwards";
    setTimeout(() => {
        document.querySelector(".btn-secondary").style.display = "none";
    }, 500);
}

function signUp() {
    document.getElementById("formTitle").innerText = "Sign Up";
    document.getElementById("nameField").style.display = "block";
    document.querySelector(".btn-primary").classList.remove("btn-primary");
    document.querySelector(".btn-primary").classList.add("btn-secondary");
    document.querySelector(".btn-secondary").classList.remove("btn-secondary");
    document.querySelector(".btn-secondary").classList.add("btn-primary");
    document.querySelector(".back-arrow").style.display = "none";
}

function reloadPage() {
    location.reload();
}