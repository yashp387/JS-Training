// Problem 3: Dynamic Product List with Filter and Sort
// Objective
// Create a dynamic product list UI with filtering and sorting capabilities.

// Requirements:
// Render products from a JavaScript array

// Implement:
// Filter by price
// Sort by product name
// Update DOM dynamically on button click
// Render HTML using template literals
// Attach event listeners properly

// Constraints:
// No page reloads
// Use only map, filter, and sort for data manipulation

// Expected Outcome:
// Product list updates instantly
// Filters and sorting work correctly
// Clean, readable DOM updates

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 400 },
  { id: 3, name: "Tablet", price: 300 },
  { id: 4, name: "Monitor", price: 600 },
];

let currentProducts = [...products];

const productList = document.getElementById("productList");
const filterBtn = document.getElementById("filterBtn");
const sortBtn = document.getElementById("sortBtn");
const resetBtn = document.getElementById("resetBtn");

function renderProducts(data) {
  if (data?.length === 0) {
    productList.innerHTML = `<p class="empty-msg">No products found</p>`;
    return;
}

  productList.innerHTML = data
    .map(
      (product) => `
        <div class="product">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
        </div>
        `,
    )
    .join(" ");
}

const handleFilter = () => {
    currentProducts = products.filter((p) => p.price < 700);
    renderProducts(currentProducts);
};

const handleSort = () => {
  const sorted = [...currentProducts].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  currentProducts = sorted;
  renderProducts(currentProducts);
};

const handleReset = () => {
  currentProducts = [...products];
  renderProducts(currentProducts);
};

filterBtn.addEventListener("click", handleFilter);
sortBtn.addEventListener("click", handleSort);
resetBtn.addEventListener("click", handleReset);

renderProducts(currentProducts);