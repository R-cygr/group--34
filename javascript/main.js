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

        // Add animation class to cart amount
        cartAmount.classList.add('highlight');
        setTimeout(() => {
            cartAmount.classList.remove('highlight');
        }, 500);
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

let cartItemsCount = 0;
let cartItems = [];

// Find the button with the class "add-to-cart"
const addToCartButton = document.querySelector('.add-to-cart');

// Add event listener to the button
addToCartButton.addEventListener('click', () => {
    // Call addToCart function when the button is clicked
    addToCart('Product Name'); // Replace 'Product Name' with your product's name
});

function addToCart(productName) {
    // Add the product to the cart items array
    cartItems.push(productName);
    
    // Increment the cart items count
    cartItemsCount++;
    
    // Update the cart display with the new count
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartDisplay = document.getElementById('cart');
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; // Clear previous cart items
    
    // Display each item in the cart
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = item;
        cartItemsDiv.appendChild(itemDiv);
    });
    
    // Update the cart count display
    cartDisplay.textContent = `Cart (${cartItemsCount})`;
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('show');
    updateCartDisplay(); // Update the cart display when toggled
}

function checkout() {
    // Implement checkout logic (e.g., redirect to a checkout page)
    alert('Redirecting to checkout page...');
}

