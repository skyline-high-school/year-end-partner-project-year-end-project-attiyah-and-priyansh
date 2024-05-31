window.addEventListener('scroll', function() {
    const fadeOut = document.querySelector('.fade-out');
    const fadeIn = document.querySelector('.fade-in');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight;

    // Adjust opacity for fade-out effect
    fadeOut.style.opacity = 1 - (scrollY / windowHeight);

    // Adjust opacity for fade-in effect
    fadeIn.style.opacity = (scrollY / (docHeight - windowHeight));
});

// Function to update the cart count
function updateCartCount() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCountElement = document.getElementById('cartCount');
    let totalCount = 0;
    cartItems.forEach(item => {
        totalCount += item.quantity || 1;
    });
    cartCountElement.textContent = totalCount;
}

// Function to add a product to the cart
function addToCart(productName, price) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // Check if the item is already in the cart
    let existingItem = cartItems.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name: productName, price: price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartCount();
    alert(productName + ' has been added to the cart!');
}

// Call the function initially to set the initial count
updateCartCount();
