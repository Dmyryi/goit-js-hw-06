const buttonChange = document.querySelector('.change-color')
const spanColor = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}

const changeColor = (event) => {
  let randomColor = getRandomHexColor()
document.body.style.backgroundColor = randomColor;
spanColor.textContent = randomColor;
    if (buttonChange.textContent === 'Change color') {
        buttonChange.textContent = 'Change color again';
      }
}
buttonChange.addEventListener('click', changeColor)

