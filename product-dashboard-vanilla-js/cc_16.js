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
