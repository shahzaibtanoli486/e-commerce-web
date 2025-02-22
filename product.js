// Fetch product data from JSON
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        // Get the product ID from the URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        // Find the product with the matching ID
        const product = data.find(p => p.id == productId);

        if (product) {
            // Update the main product section with the selected product's details
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-description').textContent = product.description;

            // Display related products (excluding the current product)
            const relatedProducts = data.filter(p => p.id != productId).slice(0, 4); // Get first 4 related products
            const relatedProductsGrid = document.getElementById('related-products-grid');

            relatedProducts.forEach(product => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                    </div>
                `;

                // Add click event to each related product card
                card.addEventListener('click', () => {
                    // Redirect to the product detail page with the clicked product's ID
                    window.location.href = `product.html?id=${product.id}`;
                });

                relatedProductsGrid.appendChild(card);
            });
        } else {
            // If no product is found, display a message
            document.getElementById('product-detail').innerHTML = `
                <div class="col-12 text-center">
                    <h1>Product Not Found</h1>
                    <p>Sorry, the product you are looking for does not exist.</p>
                </div>
            `;
        }
    })
    .catch(error => console.error('Error fetching product data:', error));