const inputLength = document.querySelector('[data-length="6"]')
const input = document.querySelector('#validation-input')



input.addEventListener("input", (event) => {
     input.classList.remove('valid', 'invalid');
    if (event.currentTarget.value.length === parseInt(inputLength.dataset.length)) {
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
    }
});