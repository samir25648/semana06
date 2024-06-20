document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productTableBody = document.getElementById('productTableBody');

    cart.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.name}</td>
            <td>PEN ${item.price}</td>
            <td>${item.size}</td>
            <td>${item.quantity}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Eliminar</button></td>
        `;

        productTableBody.appendChild(row);
    });

    function updateCartCounter() {
        const cartCounter = document.getElementById('carrito-counter');
        cartCounter.textContent = cart.length;
    }


    updateCartCounter();
});


function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}


// navbara
var navbarToggler = document.querySelector('.navbar-toggler');
var navbarNav = document.querySelector('#navbarNav');

navbarToggler.addEventListener('click', function () {

    if (navbarNav.classList.contains('show')) {

        navbarNav.classList.remove('show');
    } else {
        navbarNav.classList.add('show');
    }
});
