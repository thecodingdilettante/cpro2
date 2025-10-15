fetch('https://www.course-api.com/javascript-store-products')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      console.log(`Product: ${product.fields.name} | Price: $${product.fields.price / 100}`);
    });
  })
  .catch(error => console.error('Failed to load product data:', error));