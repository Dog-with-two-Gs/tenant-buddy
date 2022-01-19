const loginButtonHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/login');
}

const signupButtonHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/signup');
}

document
  .querySelector('.login-button')
  .addEventListener('click', loginButtonHandler);

document
  .querySelector('.sign-up-button')
  .addEventListener('click', signupButtonHandler);