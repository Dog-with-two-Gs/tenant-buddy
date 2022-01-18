const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#first-name-signup').value.trim();
  const lastName = document.querySelector('#last-name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const phone = document.querySelector('#phone-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if(firstName && lastName && email && phone && password){
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({name, email, password }),
      headers: {'Content-Type': 'application/json' },
    });

    if(response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler)