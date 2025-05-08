

document.addEventListener('DOMContentLoaded', function() {
  // All products data
  const products = [
    {
      id: "iphone13promax",
      name: "iPhone 13 Pro Max 256GB Black",
      price: 330,
      image: "Assets/iphone13promax.avif",
      description: "The iPhone 13 Pro Max features a 6.7-inch display, A15 Bionic chip, and advanced camera system."
    },
    {
      id: "iphone15",
      name: "iPhone 15 128 GB Black",
      price: 464,
      image: "Assets/iphone15.avif",
      description: "The iPhone 15 offers a sleek design, powerful performance, and improved battery life."
    },
    {
      id: "iphone16promax",
      name: "iPhone 16 Pro Max 256GB Desert Titanium",
      price: 887,
      image: "Assets/iphone16promax.avif",
      description: "The latest iPhone 16 Pro Max with a stunning titanium finish and top-tier specs."
    },
    {
      id: "samsungs24ultra",
      name: "Galaxy S24 Ultra 256GB Black",
      price: 556,
      image: "Assets/samsungs24ultra.avif",
      description: "Samsung's flagship S24 Ultra with a brilliant display and pro-grade camera."
    },
    {
      id: "phonecaseiphone11",
      name: "Case iPhone 11",
      price: 19.99,
      image: "Assets/phonecaseiphone11.avif",
      description: "Protective and stylish case for iPhone 11."
    },
    {
      id: "wirelesscharger",
      name: "Wireless Charger",
      price: 18.99,
      image: "Assets/wirelesscharger.jpeg",
      description: "Fast wireless charger compatible with most smartphones."
    }
  ];

  // Get product id from URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product');

  // Find the product by id
  const product = products.find(p => p.id === productId);

  const productDetails = document.getElementById('product-details');
  if (product) {
    productDetails.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="max-width:300px;">
      <h1>${product.name}</h1>
      <div class="price">£${product.price}</div>
      <div class="description">${product.description}</div>
      <div class="buttons">
        <button class="add-to-cart">Add to Cart</button>
        <button class="buy-now">Buy Now</button>
      </div>
    `;
    // Add to Cart button functionality
    productDetails.querySelector('.add-to-cart').addEventListener('click', function() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Added to cart!');
    });
  } else {
    productDetails.innerHTML = '<p>Product not found.</p>';
  }
});