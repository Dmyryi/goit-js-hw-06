const value = document.querySelector('#value')
const incrementButton = document.querySelector('[data-action="increment"]')
const decrementButton = document.querySelector('[data-action="decrement"]')

let counterValue = 0
const increment = () => {
counterValue += 1;
  value.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue
}

incrementButton.addEventListener("click", increment);

decrementButton.addEventListener('click', decrement)