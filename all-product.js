// Fetch product data from JSON
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const allProductsGrid = document.getElementById('all-products-grid');

        // Populate All Products Section
        data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                </div>
            `;

            // Add click event to each card
            card.addEventListener('click', () => {
                // Redirect to the product detail page with the product ID as a URL parameter
                window.location.href = `product.html?id=${product.id}`;
            });

            allProductsGrid.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching product data:', error));



    
    let menulist = document.getElementById("menulist")
menulist.style.maxHeight = "0px";

function toggleMenu() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "200px";
    }
    else {
        menulist.style.maxHeight = "0px";
    }
}