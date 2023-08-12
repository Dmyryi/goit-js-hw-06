const inputLength = document.querySelector('[data-length="6"]')
const input = document.querySelector('#validation-input')

// console.log(event.currentTarget.value.length)

input.addEventListener("input", (event) => {
     input.classList.remove('valid', 'invalid');
    if (event.currentTarget.value.length == 6) {
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
    }
});