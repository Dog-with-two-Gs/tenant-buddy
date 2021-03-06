function addDashes(f) {
  f_val = f.replace(/\D[^\.]/g, "");
  return f_val.slice(0, 3) + "-" + f_val.slice(3, 6) + "-" + f_val.slice(6);
}

const signupFormHandler = async (event) => {
  event.preventDefault();

  const apartment_id = document.querySelector('#apartment-signup').value.trim();
  const firstname = document.querySelector('#first-name-signup').value.trim();
  const lastname = document.querySelector('#last-name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const phone_number = addDashes(document.querySelector('#phone-signup').value);
  const password = document.querySelector('#password-signup').value.trim();

  if (apartment_id && firstname && lastname && email && phone_number && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ apartment_id, firstname, lastname, phone_number, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.assign('/login');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler)