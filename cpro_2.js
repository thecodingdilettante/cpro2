function fetchProductsThen() {
fetch('https://www.course-api.com/javascript-store-products')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      console.log(`Product: ${product.fields.name} | Price: $${product.fields.price / 100}`);
    });
  })
  .catch(error => console.error('Failed to load product data:', error));
};

async function fetchProductsAsync() {
  try {
    const res = await fetch ("https://www.course-api.com/javascript-store-products");
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    handleError(error);
  }
}
loadProducts();

