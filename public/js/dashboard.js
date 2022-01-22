const init = async () => {
  const machineResponse = await fetch('/api/machine/free', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json',},
  });
  if(!machineResponse.ok) machineResponse.statusText
  // console.log(machineResponse);
  const reservationResponse = await fetch('api/reservation', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json',},
  })
  if(!reservationResponse.ok) reservationResponse.statusText

  // Promise.all([machineResponse, reservationResponse]).then((values) => {
  //   console.log(values)
  // })
}

const reservationBtnHandler = (event) => {
  event.preventDefault();

  document.location.replace('/reservation');
};

init();

document
  .querySelector('#reserve-btn')
  .addEventListener('click', reservationBtnHandler);

