// main.js

document.addEventListener('DOMContentLoaded', function () {
    let cartItems = [];

    function updateCartDisplay() {
        const cartList = document.getElementById('cart-items');
        cartList.innerHTML = '';

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            cartList.appendChild(listItem);
        });

        // Update cart amount display
        const cartAmount = document.querySelector('.cartAmount');
        cartAmount.textContent = cartItems.length;
    }

    function addToCart(productName) {
        cartItems.push(productName);
        updateCartDisplay();
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const productName = button.getAttribute('data-product');
            addToCart(productName);
        });
    });
});

/* DEMETRIS PART*/

function checkout() {
    alert('Redirecting to checkout page...');
}
