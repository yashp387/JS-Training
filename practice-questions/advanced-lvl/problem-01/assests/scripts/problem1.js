// ==========================================
// 1. STATE MANAGEMENT
// ==========================================

let state = {
    products: [],
    cart: [],
    searchTerm: ""
};

const formateCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(amount);
}

// Requirement: Persist cart data
const loadState = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        state.cart = JSON.parse(savedCart); 
    }
};

const saveState = () => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
};

// Requirement: Use rest operator to merge state
const updateState = (updates) => {
    state = { ...state, ...updates };  // use spread operator becuase only needs merge top-leve keys.
    render();
};

// ==========================================
// 2. DATA FETCHING & LOGIC
// ==========================================

// Requirement: Handle “out of stock” using Promise chaining
const checkStockAvailability = (product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly fail 50% of the time
            const isAvailable = Math.random() > 0.5;
            if (isAvailable) {
                resolve(product);
            } else {
                reject(`Item "${product.title.substring(0, 15)}..." is currently out of stock!`);
            }
        }, 500); 
    });
};

// Requirement: Fetch product data (New API)
const fetchProducts = async () => {
    const errorContainer = document.getElementById('error-container');
    const productListEl = document.getElementById('product-list');

    try {
        // UPDATED API URL
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();

        // No need to generate random prices, this API has them.
        updateState({ products: data });

    } catch (error) {
        // Requirement: Display errors using innerHTML
        errorContainer.style.padding = "1rem";
        errorContainer.innerHTML = `<strong>Error:</strong> Failed to load products. ${error.message}`;
        productListEl.innerHTML = `<p>Unable to load data.</p>`;
    }
};

// ==========================================
// 3. CART OPERATIONS
// ==========================================

// Requirement: Arrow functions & StructuredClone
const addToCart = (product) => {
    const currentCart = structuredClone(state.cart);
    const existingItemIndex = currentCart.findIndex(item => item.id === product.id);

    if (existingItemIndex > -1) {
        currentCart[existingItemIndex].quantity += 1;
    } else {
        currentCart.push({ ...product, quantity: 1 });
    }

    updateState({ cart: currentCart });
    saveState();
};

// Requirement: Object destructuring
const removeFromCart = (idToRemove) => {
    const newCart = state.cart.filter(({ id }) => id !== idToRemove);
    updateState({ cart: newCart });
    saveState();
};

const clearCart = () => {
    updateState({ cart: [] });
    saveState();
};

// Requirement: Reduce
const calculateTotal = () => {
    return state.cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
};  

// ==========================================
// 4. RENDERING & EVENTS
// ==========================================

// Requirement: String manipulation
const formatTitle = (title) => {
    const words = title.split(' ');
    // If title is longer than 4 words, truncate it
    if (words.length > 4) {
        return words.slice(0, 4).join(' ') + '...';
    }
    return words.join(' ');
};

const render = () => {
    const productListEl = document.getElementById('product-list');
    const cartItemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');

    // 1. Render Products (Filtered)
    const filteredProducts = state.products.filter(p => 
        p.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

    // Requirement: Template literals
    if (state.products.length > 0) {
        // Using 'product.image' instead of 'thumbnailUrl'
        productListEl.innerHTML = filteredProducts.map(product => `
            <div class="card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.title}">
                <div class="card-body">
                    <h4>${formatTitle(product.title)}</h4>
                    <p class="price">${formateCurrency(product.price)}</p>
                </div>
                <button class="btn add-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        `).join('');
    }

    // 2. Render Cart
    if (state.cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-msg">Cart is empty.</p>';
    } else {
        cartItemsEl.innerHTML = state.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${formatTitle(item.title)} (x${item.quantity})</h4>
                    <small>$${formateCurrency(item.price * item.quantity)}</small>
                </div>
                <button class="danger-btn remove-btn" data-id="${item.id}">&times;</button>
            </div>
        `).join('');
    }

    // 3. Update Total
    totalEl.innerText = formateCurrency(calculateTotal());
};

// ==========================================
// 5. EVENT LISTENERS
// ==========================================

const initEvents = () => {
    // Requirement: Event delegation
    document.getElementById('product-list').addEventListener('click', (e) => {
        const btn = e.target.closest(".add-btn");
        if(!btn) return;
            const id = parseInt(btn.dataset.id);
            const product = state.products.find(p => p.id === id);
            const originalText = btn.innerText;
            btn.innerText = "Checking...";
            btn.disabled = true;

            // Requirement: Promise chaining
            checkStockAvailability(product)
                .then((validProduct) => {
                    addToCart(validProduct);
                    btn.innerText = "Added!";
                    setTimeout(() => { 
                        btn.innerText = originalText; 
                        btn.disabled = false;
                    }, 1000);
                })
                .catch((errorMsg) => {
                    alert(errorMsg);
                    btn.innerText = "Out of Stock";
                    btn.style.backgroundColor = "#95a5a6";
                });
    });

    document.getElementById('cart-items').addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const id = parseInt(e.target.dataset.id);
            removeFromCart(id);
        }
    });

    document.getElementById('search-input').addEventListener('input', (e) => {
        const value = e.target.value.trim();
        updateState({ searchTerm: value });
    });

    document.getElementById('clear-cart-btn').addEventListener('click', clearCart);
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    fetchProducts();
    initEvents();
});