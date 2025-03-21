



const email = document.querySelector("#email");
const password = document.querySelector("#password");
const boton = document.querySelector("#btn-form");

const check_email = document.querySelector("#check-email");
const check_password = document.querySelector("#check-password");


function validateEmail() {
    if (email.value == "") {
        console.log("Email vacio");
        check_email.checked = false;
    } else if (!email.value.includes("@")) {
        console.log("Email no valido");
        check_email.checked = false;
    } else {
        check_email.checked = true;
    }
}

function validatePassword() {
    if (password.value  == "") {
        check_password.checked = false;
        console.log("Contraseña vacia");
    } else if (password.value.length < 6) {
        console.log("Contraseña muy corta");
        check_password.checked = false
    } else {
        console.log("Contraseña valida");
        check_password.checked = true;
    }
}

boton.addEventListener("click", function() {
    validateEmail();
    validatePassword();
});