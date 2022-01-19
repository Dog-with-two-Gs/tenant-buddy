function addDashes(f) {
  if(f){
  f_val = f.replace(/\D[^\.]/g, "");
  return f_val.slice(0, 3) + "-" + f_val.slice(3, 6) + "-" + f_val.slice(6);
  } else return;
}

const updateFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-update').value.trim() || undefined;
  const phone_number = addDashes(document.querySelector('#phone-update').value);
  const password = document.querySelector('#password-update').value.trim() || undefined;

  if (email || phone_number || password) {
    const response = await fetch('/api/users/update', {
      method: 'PUT',
      body: JSON.stringify({ phone_number, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.update-form')
  .addEventListener('submit', updateFormHandler)