const counterValue = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let currentValue = 0;

const increment = () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
};

const decrement = () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
};

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);