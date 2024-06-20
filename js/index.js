// Función para validar usuario
function validarUsuario() {
    var name = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    // Obtener datos de localStorage
    var storedUser = localStorage.getItem('usuario');
    var storedPassword = localStorage.getItem('contrasena');

    if (name === storedUser && password === storedPassword) {
        window.location.href = "/index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// Evento para cargar datos del localStorage al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
    // No prellenar el formulario con el usuario automáticamente

    // Función para actualizar el contador del carrito
    function updateCartCounter() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCounter = document.getElementById('carrito-counter');
        cartCounter.textContent = cart.length;
    }

    updateCartCounter();

    // Navbar toggle
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarNav = document.querySelector('#navbarNav');

    navbarToggler.addEventListener('click', function () {
        if (navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
        } else {
            navbarNav.classList.add('show');
        }
    });
});
