const reservationBtnHandler = (event) => {
  event.preventDefault();

  document.location.replace('/reservation');
};

document
  .querySelector('#reserve-btn')
  .addEventListener('click', reservationBtnHandler);