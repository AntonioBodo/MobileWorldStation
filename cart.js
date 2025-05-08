document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
  
    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Function to render cart items
    function renderCart() {
      cartItemsContainer.innerHTML = '';
      let totalPrice = 0;
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty. Start shopping now!</p>';
        totalPriceElement.textContent = '0';
        return;
      }
  
      cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
  
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <p>£${item.price.toFixed(2)}</p>
          </div>
          <button class="remove-item" data-index="${index}">Remove</button>
        `;
  
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.price;
      });
  
      totalPriceElement.textContent = totalPrice.toFixed(2);
    }
  
    // Function to remove an item from the cart
    cartItemsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-item')) {
        const index = e.target.getAttribute('data-index');
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
      }
    });
  
    // Function to continue shopping
    window.continueShopping = function () {
      window.location.href = 'products.html';
    };
  
    // Initial render
    renderCart();
  });