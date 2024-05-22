document.addEventListener('DOMContentLoaded', function() {

    const carritoCounter = document.getElementById('carrito-counter');

    function updateCartCounter() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalQuantity = 0;
        cart.forEach(item => {
            totalQuantity += parseInt(item.quantity);
        });
        carritoCounter.innerText = totalQuantity;
    }

    document.getElementById('addToCartBtn').addEventListener('click', function() {
        const productName = 'POLO ESTRUCTURADO';
        const productPrice = 15.00;
        const productSize = document.getElementById('talla').value;
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