
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = event.target.email;
  const passwordInput = event.target.password;

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Усі поля повинні бути заповнені! 😡');
        return
    };

  const formData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  console.log(formData);
 
  event.target.reset()
});

