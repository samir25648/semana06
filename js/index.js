function validarUsuario() {
    var name = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    if (name == "samir" && password == "1234") {
        window.location.href = "/index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}


document.addEventListener('DOMContentLoaded', function () {

    function updateCartCounter() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCounter = document.getElementById('carrito-counter');
        cartCounter.textContent = cart.length;
    }

    updateCartCounter();
});


//navbar
var navbarToggler = document.querySelector('.navbar-toggler');
var navbarNav = document.querySelector('#navbarNav');

navbarToggler.addEventListener('click', function () {

    if (navbarNav.classList.contains('show')) {

        navbarNav.classList.remove('show');
    } else {
        navbarNav.classList.add('show');
    }
});




