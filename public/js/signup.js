const signupFormHandler = async (event) => {
  event.preventDefault();

  const apartment_id = document.querySelector('#apartment-signup').value.trim();
  const firstname = document.querySelector('#first-name-signup').value.trim();
  const lastname = document.querySelector('#last-name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const phone_number = document.querySelector('#phone-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (apartment_id && firstname && lastname && email && phone_number && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ apartment_id, firstname, lastname, phone_number, email, password }),
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
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler)