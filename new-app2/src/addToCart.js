function addToCart(){
    const cartItems = [];

// When the "Добавить в корзину" button is clicked, add the h1 content to the array:
const addToCartButton = document.querySelector(".addToBusket button");
const h1Content = document.querySelector(".h1").textContent;

addToCartButton.addEventListener("click", () => {
  cartItems.push(h1Content);
  console.log("Added to cart:", h1Content);
});
}

export default addToCart;