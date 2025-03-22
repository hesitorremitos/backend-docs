/* Todos los campos deben estar llenos.
El campo correo debe tener una ’@’.
El campo contraseña debe tener al menos 6 caracteres.
El campo confirmar contraseña debe ser igual al campo contraseña.
La persona debe ser mayor de edad(mayor a 18 años).
*/

const btn = document.querySelector('#btn');

// Campos
const nombre = document.querySelector('#name');
const edad = document.querySelector('#age');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//checkboxs
const check_nombre = document.querySelector('#check-name');
const check_edad = document.querySelector('#check-edad');
const check_email = document.querySelector('#check-email');
const check_password = document.querySelector('#check-password');


// Funciones para validar
// Validar nombre

function validarNombre() {
    if(nombre.value === '') {
        alert('El campo nombre es obligatorio');
    }else{
        console.log('Nombre:  validado');
        // Cambiar estado de checkbox
        check_nombre.checked = true;
        // cambiar color
        check_nombre.parentElement.style.backgroundColor = '#90feb9';
        
    }
}

// Validar edad
function validarEdad() {
    if(edad.value === '' || edad.value < 18) {
        alert('La edad debe ser mayor a 18 años');
    }else{
        console.log('Edad:  validado');
        check_edad.checked = true;
        check_edad.parentElement.style.backgroundColor = '#90feb9';
    }
}
// Validar email
function validarEmail() {
    if(email.value.includes('@') == false) {
        alert('El correo debe tener una @');
    }else{
        console.log('Email:  validado');
        check_email.checked = true;
        check_email.parentElement.style.backgroundColor = '#90feb9';
    }
}

// Validar contraseña
function validarPassword() {
    if(password.value.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
    }else if(password.value !== password2.value) {
        alert('Las contraseñas no coinciden');
    }else{
        console.log('Contraseña:  validado');
        check_password.checked = true;
        check_password.parentElement.style.backgroundColor = '#90feb9';
    }
}




// eventos
btn.addEventListener('click', (e) => {
    e.preventDefault();
    validarNombre();
    validarEdad();
    validarEmail();
    validarPassword();
});