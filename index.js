function addToCart(product) {
    // Add the product to the shopping cart
  }
  
  function checkout() {
    // Process the checkout for the shopping cart
  }
  
  function filterProducts(category) {
    // Filter the products by the given category
  }
  
  // Add event listeners for the "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".product button");
  addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      addToCart(this.parentElement);
    });
  });
  
  // Add event listeners for the filter buttons
  const filterButtons = document.querySelectorAll(".filter-button");
  filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      filterProducts(this.dataset.category);
    });
  });
  
  // Add an event listener for the checkout button
  const checkoutButton = document.querySelector(".checkout-button");
  checkoutButton.addEventListener("click", checkout);
  
