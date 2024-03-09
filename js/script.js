// Sample product data
const products = [
    {
        name: "Sobolo",
        image: "images/sobolo.jpg",
        formUrl: "https://forms.gle/D6psfqHATPpLs5Vp8"
    },
    {
        name: "Pineapple Juice",
        image: "images/pineapple-juice.jpg",
        formUrl: "https://forms.gle/D6psfqHATPpLs5Vp8"
    }
    ,
    {
        name: "Lemon Juice",
        image: "images/lemon-juice.jpg",
        formUrl: "https://forms.gle/D6psfqHATPpLs5Vp8"
    }
];

// Function to open Google Form when the "Order" button is clicked
function openGoogleForm(formUrl) {
    window.open(formUrl, '_blank');
}

// Function to share product on Facebook
function shareOnFacebook(productName, productUrl) {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}&quote=${encodeURIComponent(productName)}`;
    window.open(url, '_blank');
}

// Function to share product on Twitter
function shareOnTwitter(productName, productUrl) {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(productName)}`;
    window.open(url, '_blank');
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
                <button onclick="shareOnFacebook('${product.name}', '${window.location.href}')">Share on Facebook</button>
                <button onclick="shareOnTwitter('${product.name}', '${window.location.href}')">Share on Twitter</button>
            </div>
        `;

        productsContainer.appendChild(card);
    });
}

// Display products when the page loads
window.onload = displayProducts;
