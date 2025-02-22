// Fetch product data from JSON
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const productsGrid = document.getElementById('products-grid');

        // Populate Products Section
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

            productsGrid.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching product data:', error));



// ----old----js-----


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

// ----------js-for-product-gallery------
var productimg = document.getElementById("ProductImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
    productimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    productimg.src = smallimg[1].src;

}
smallimg[2].onclick = function () {
    productimg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    productimg.src = smallimg[3].src;
}
// -------js-for-toggle-form----

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("indicator");

function register(){
    RegForm.style.transform = "translateX (0px)";
    LoginForm.style.transform = "translateX (0px)";
    Indicator.style.transform = "translateX (100px)"; 

}
function login(){
    RegForm.style.transform = "translateX (300px)";
    LoginForm.style.transform = "translateX (300px)";
    Indicator.style.transform = "translateX (0px)";
}