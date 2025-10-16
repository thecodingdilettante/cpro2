function fetchProductsThen() {
fetch("https://www.course-api.com/javascript-store-products")
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      console.log(product.fields.name);
    });
  })
  .catch(error => console.error("Failed to load product data:", error));
};

async function fetchProductsAsync() {
  try {
    const response = await fetch ("https://www.course-api.com/javascript-store-products");
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("product-container");
  const firstFive = products.slice(0, 5);
  firstFive.forEach((product) => {
    const { name, price, image } = product.fields;

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${image[0].url}" alt="${name}" />
      <h3>${name}</h3>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(card);
  });
}w

function handleError(error) {
  console.error("An error occurred:", error.message);
}

fetchProductsThen();
fetchProductsAsync();