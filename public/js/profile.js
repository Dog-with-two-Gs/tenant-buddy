const updateButtonHandler =  async (event) => {
  event.preventDefault();
  document.location.replace('/update');
}

document
  .querySelector('.update-button')
  .addEventListener('click', updateButtonHandler);