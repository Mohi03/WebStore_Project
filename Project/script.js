// --- DOM Elements ---
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const notification = document.getElementById('notification');
const cartLink = document.getElementById('cart-link');
const cartCountBadge = document.getElementById('cart-count-badge');
const cartModalOverlay = document.getElementById('cart-modal-overlay');
const cartModalContent = document.getElementById('cart-modal-content');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalEl = document.getElementById('cart-total');
const cartEmptyMsg = document.getElementById('cart-empty-msg');
const checkoutBtn = document.getElementById('checkout-btn');

// --- Cart State ---
let cartItems = []; // Array to hold items: { id, name, price, quantity }

// --- Functions ---

/**
 * Renders the items currently in the cartItems array into the modal.
 */
function renderCart() {
    // Clear previous items
    cartItemsContainer.innerHTML = '';

    let total = 0;
    let totalQuantity = 0;

    if (cartItems.length === 0) {
        cartItemsContainer.appendChild(cartEmptyMsg); // Show empty message
        cartEmptyMsg.classList.remove('hidden');
        checkoutBtn.disabled = true; // Disable checkout if cart is empty
    } else {
         cartEmptyMsg.classList.add('hidden'); // Hide empty message
         checkoutBtn.disabled = false; // Enable checkout

        cartItems.forEach(item => {
            total += item.price * item.quantity;
            totalQuantity += item.quantity;

            const itemElement = document.createElement('div');
            itemElement.classList.add('flex', 'justify-between', 'items-center', 'py-3', 'border-b', 'border-gray-200', 'last:border-b-0');
            itemElement.innerHTML = `
                <div class="flex items-center space-x-3">
                     <span class="font-semibold text-gray-700 truncate w-32 sm:w-48">${item.name}</span>
                     <span class="text-sm text-gray-500">($${item.price.toFixed(2)})</span>
                </div>
                <div class="flex items-center space-x-2">
                    <button class="cart-quantity-btn decrease-quantity p-1 rounded border border-gray-300 hover:bg-gray-100" data-id="${item.id}" aria-label="Decrease quantity of ${item.name}">-</button>
                    <span class="font-medium w-6 text-center">${item.quantity}</span>
                    <button class="cart-quantity-btn increase-quantity p-1 rounded border border-gray-300 hover:bg-gray-100" data-id="${item.id}" aria-label="Increase quantity of ${item.name}">+</button>
                    <button class="cart-remove-btn text-red-500 hover:text-red-700 p-1" data-id="${item.id}" aria-label="Remove ${item.name} from cart">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    // Update total price display
    cartTotalEl.textContent = `$${total.toFixed(2)}`;

    // Update cart count badge in header
    if (totalQuantity > 0) {
        cartCountBadge.textContent = totalQuantity;
        cartCountBadge.classList.remove('hidden');
    } else {
        cartCountBadge.classList.add('hidden');
    }
}

/**
 * Adds an item to the cart or increments its quantity.
 * @param {string} id - The product ID.
 * @param {string} name - The product name.
 * @param {number} price - The product price.
 */
function addToCart(id, name, price) {
    const existingItemIndex = cartItems.findIndex(item => item.id === id);

    if (existingItemIndex > -1) {
        // Item exists, increment quantity
        cartItems[existingItemIndex].quantity++;
    } else {
        // Item doesn't exist, add new item
        cartItems.push({ id, name, price, quantity: 1 });
    }
    console.log("Cart updated:", cartItems); // For debugging
    renderCart(); // Update the cart display
    showNotification(`${name} added to cart!`);
}

/**
 * Updates the quantity of an item in the cart.
 * @param {string} id - The product ID.
 * @param {number} change - The change in quantity (+1 or -1).
 */
function updateQuantity(id, change) {
    const itemIndex = cartItems.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        cartItems[itemIndex].quantity += change;
        // Remove item if quantity drops to 0 or less
        if (cartItems[itemIndex].quantity <= 0) {
            cartItems.splice(itemIndex, 1);
        }
        renderCart(); // Update the cart display
    }
}

/**
 * Removes an item completely from the cart.
 * @param {string} id - The product ID.
 */
function removeFromCart(id) {
    const itemIndex = cartItems.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        const removedItemName = cartItems[itemIndex].name;
        cartItems.splice(itemIndex, 1); // Remove item from array
        renderCart(); // Update the cart display
        showNotification(`${removedItemName} removed from cart.`);
    }
}


/**
 * Shows the notification message.
 * @param {string} message - The message to display.
 */
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

/**
 * Opens the cart modal with animation.
 */
function openCartModal() {
    renderCart(); // Ensure cart is up-to-date when opened
    cartModalOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open'); // Prevent background scroll
    // Use setTimeout to allow the display property to apply before starting transition
    setTimeout(() => {
        cartModalOverlay.classList.remove('opacity-0');
        cartModalContent.classList.remove('scale-95', 'opacity-0');
    }, 10); // Small delay
}

/**
 * Closes the cart modal with animation.
 */
function closeCartModal() {
    cartModalOverlay.classList.add('opacity-0');
    cartModalContent.classList.add('scale-95', 'opacity-0');
    document.body.classList.remove('modal-open'); // Re-enable background scroll
    // Wait for animation to finish before hiding
    setTimeout(() => {
        cartModalOverlay.classList.add('hidden');
    }, 300); // Match transition duration
}


// --- Event Listeners ---

// Add to Cart buttons on product cards
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('[data-product-id]'); // Find parent card
        const id = card.dataset.productId;
        const name = button.dataset.productName;
        const price = parseFloat(button.dataset.price);
        addToCart(id, name, price);
    });
});

// Open Cart Modal
cartLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    openCartModal();
});

// Close Cart Modal (Close Button)
closeCartBtn.addEventListener('click', closeCartModal);

// Close Cart Modal (Overlay Click)
cartModalOverlay.addEventListener('click', (e) => {
    // Close only if clicking directly on the overlay, not the content inside
    if (e.target === cartModalOverlay) {
        closeCartModal();
    }
});

// Handle clicks inside the cart items container (Event Delegation)
cartItemsContainer.addEventListener('click', (e) => {
    const target = e.target;

    // Check if decrease quantity button was clicked
    const decreaseBtn = target.closest('.decrease-quantity');
    if (decreaseBtn) {
        const id = decreaseBtn.dataset.id;
        updateQuantity(id, -1);
        return; // Stop further processing
    }

    // Check if increase quantity button was clicked
    const increaseBtn = target.closest('.increase-quantity');
    if (increaseBtn) {
        const id = increaseBtn.dataset.id;
        updateQuantity(id, 1);
        return; // Stop further processing
    }

    // Check if remove button was clicked
    const removeBtn = target.closest('.cart-remove-btn');
    if (removeBtn) {
        const id = removeBtn.dataset.id;
        removeFromCart(id);
        return; // Stop further processing
    }
});

// Checkout Button (Placeholder Action - Alert Removed)
checkoutBtn.addEventListener('click', () => {
    if (cartItems.length > 0) {
        // alert('Checkout process is not implemented in this demo.'); // <--- Removed this line
        console.log("Checkout initiated (not implemented)"); // Optional: log to console instead
        // In a real app, you would redirect to a checkout page or process payment.
        closeCartModal(); // Optionally close cart after clicking checkout
    }
});


// Smooth scroll for internal links (e.g., #products)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Exclude the cart link from smooth scrolling
    if (anchor.id === 'cart-link') return;

    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('header').offsetHeight || 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initial setup on page load
renderCart(); // Render cart initially (will show empty)