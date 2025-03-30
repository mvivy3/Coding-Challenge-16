// Task 2: Fetch Products with .then()
function fetchProductsThen() {
    fetch (`https://www.course-api.com/javascript-store-products`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network Error`);
        }
        return response.json();
    })
    // Log each product'sname to the console
    .then(products => {
        products.forEach(product => {
            console.log(product.fields.name);
        });
    })
// Use .catch() to log any errors
.catch(error => {
    console.error(`Error fetching products`)
});
}

// Task 3: Fetch Products
async function fetchProductsAsync() {
    try {
        const response = await fetch(`https://www.course-api.com/javascript-store-products`);
        if (!response.ok) {
            throw new Error(`Network Error`);
        }
        const products = await response.json();
        // Display products and handle errors
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Task 4: Display the Products
function displayProducts(products) {
    const container = document.getElementById(`product-container`);
    
    container.innerHTML = ``;

    products.slice(0,5).forEach(product => {

        const productDiv = document.createElement(`div`);
        productDiv.classList.add(`product`);
    
        const productName = document.createElement(`h2`);
        productName.textContent = product.fields.name;

        const productPrice = document.createElement(`p`);
        productPrice.textContent = `${product.fields.price}`;

        const productImage = document.createElement(`img`);
        productImage.src = product.fields.image[0].url;
        productImage.alt = product.fields.name;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productImage);
        // Appends to container
        container.appendChild(productDiv);
    });
}

// Task 5: Reusable Error Handler
function handleError(error) {
    console.error("An Error Occurred:", error.message); // logs the error message
}
