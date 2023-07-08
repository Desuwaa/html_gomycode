const buttons = document.querySelectorAll(".addToCart");
const done = document.querySelector(".done");
const itemsInCart = document.getElementById("count");

let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    count++;
    itemsInCart.innerHTML = count;
  });
});
