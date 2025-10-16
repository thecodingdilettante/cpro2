function fetchProductsThen() {
const productContainer = document.getElementById("product-container");
fetch("https://www.course-api.com/javascript-store-products")
  .then(response => response.json())
.then(products => {
    productContainer.innerHTML = products.map(product => {
      const { name, price, image } = product.fields;
      return `
        <div class = "product-container">
          <img src="${image[0].url}" alt="${name}" />
          <h3>${name}</h3>
          <p>$${(price / 100).toFixed(2)}</p>
        </div>
      `;
}).join('');
  })
  .catch(error => {
    productContainer.innerHTML = `<p class="error">Error loading products. Please try again later.</p>`;
    console.error('Fetch error:', error);
  });
}

function fetchProductsAsync() {
  try {
    const res = await fetch ("https://www.course-api.com/javascript-store-products");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log (`Product = ${data.products.here} SOLD HERE`);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
loadProducts();