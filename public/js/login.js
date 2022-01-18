const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  // const phone = document.querySelector('#phone-login').valuereplace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  const password = document.querySelector('#password-login')

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) document.location.replace('/profile');
  } else alert(response.statusText);
}

document
querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);