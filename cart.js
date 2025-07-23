// JS: Cart Logic
let cartCount = 0;
let cartTotal = 0;

const cartCountEl = document.getElementById("cart-count");
const cartTotalEl = document.getElementById("cart-total");

const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;

    const price = parseInt(btn.getAttribute("data-price"));
    cartTotal += price;
    cartTotalEl.textContent = cartTotal;
  });
});
