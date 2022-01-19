function addDashes(f) {
  f_val = f.replace(/\D[^\.]/g, "");
  return f_val.slice(0, 3) + "-" + f_val.slice(3, 6) + "-" + f_val.slice(6);
}

const loginFormHandler = async (event) => {
  event.preventDefault();

  let email = document.querySelector('#email-login').value.trim();
  let phone_number = addDashes(document.querySelector('#phone-login').value)
  const password = document.querySelector('#password-login').value.trim();

  if ((email || phone_number) && password) {
    if (!email) email = null;
    if (!phone_number) phone_number = null;
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, phone_number, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);