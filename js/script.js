// Sample product data
const products = [
    {
        name: "Sobolo",
        image: "images/sobolo.jpg",
        formUrl: "https://forms.gle/wckrQeMaFoP5e2E86"
    },
    {
        name: "Pineapple Juice",
        image: "images/pineapple-juice.jpg",
        formUrl: "https://forms.gle/wckrQeMaFoP5e2E86"
    },
    {
        name: "Lemon Juice",
        image: "images/lemon-juice.jpg",
        formUrl: "https://forms.gle/wckrQeMaFoP5e2E86"
    }
];

// Function to open Google Form when the "Order" button is clicked
function openGoogleForm(formUrl) {
    window.open(formUrl, '_blank');
}

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <div>
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <button onclick="openGoogleForm('${product.formUrl}')">Order</button>
            </div>
        `;

        productsContainer.appendChild(card);
    });
}

// Display products when the page loads
window.onload = displayProducts;
#jobwelldone