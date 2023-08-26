const inputName = document.querySelector('#name-input')
const outputName = document.querySelector('#name-output')

inputName.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue === "") {
    outputName.textContent = "Anonymus"
  } else if(!/^\s+$/.test(trimmedValue)) {
    outputName.textContent = event.currentTarget.value;
  }
  
});