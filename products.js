// ...existing code...

const products = [
  {
    id: "iphone13promax",
    name: "iPhone 13 Pro Max 256GB Black",
    price: 330,
    image: "Assets/iphone13promax.avif"
  },
  {
    id: "iphone15",
    name: "iPhone 15 128 GB Black",
    price: 464,
    image: "Assets/iphone15.avif"
  },
  {
    id: "iphone16promax",
    name: "iPhone 16 Pro Max 256GB Desert Titanium",
    price: 887,
    image: "Assets/iphone16promax.avif"
  },
  {
    id: "samsungs24ultra",
    name: "Galaxy S24 Ultra 256GB Black",
    price: 556,
    image: "Assets/samsungs24ultra.avif"
  },
  {
    id: "phonecaseiphone11",
    name: "iPhone 11 Phone Case",
    price: 19.99,
    image: "Assets/phonecaseiphone11.avif"
  },
  {
    id: "wirelesscharger",
    name: "Wireless Charger",
    price: 18.99,
    image: "Assets/wirelesscharger.jpeg"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const viewDetailsButtons = document.querySelectorAll('.view-details');
  const notification = document.getElementById('notification');

  addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(products[index]);
      localStorage.setItem('cart', JSON.stringify(cart));
      notification.classList.remove('hidden');
      setTimeout(() => {
        notification.classList.add('hidden');
      }, 1500);
    });
  });

  // View Details functionality: redirect with product id in URL
  viewDetailsButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      window.location.href = `product.html?product=${products[index].id}`;
    });
  });
});