document.addEventListener('DOMContentLoaded', function() {

    function updateCartCounter() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalQuantity = 0;
        cart.forEach(item => {
            totalQuantity += parseInt(item.quantity);
        });
        carritoCounter.innerText = totalQuantity;
    }

    document.getElementById('addToCartBtn').addEventListener('click', function() {
        const productName = 'POLO TIPO CUELLO';
        const productPrice = 25.00;
        const productSize = document.querySelector('select[name="inputState"]').value;
        const productQuantity = parseInt(document.getElementById('cantidad').value);

        const cartItem = {
            name: productName,
            price: productPrice,
            size: productSize,
            quantity: productQuantity
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Producto agregado al carrito!');
        updateCartCounter();
    });
    updateCartCounter();
});

const carritoCounter = document.getElementById('carrito-counter');


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
