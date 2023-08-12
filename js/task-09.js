const buttonChange = document.querySelector('.change-color')
const spanColor = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}

const changeColor = (event) => {
document.body.style.backgroundColor = getRandomHexColor();
spanColor.textContent = getRandomHexColor();
    if (buttonChange.textContent === 'Change color') {
        buttonChange.textContent = 'Change color again';
      }
}
buttonChange.addEventListener('click', changeColor)

// event.currentTarget.value