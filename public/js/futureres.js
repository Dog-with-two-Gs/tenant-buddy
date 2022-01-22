const request_time = moment(window.location.href.split('/').at(-1).replaceAll('C', ':').replaceAll('S', ' ').replaceAll('D', '-'))
//console.log(request_time.format("YYYY-MM-DD HH:mm:ss"))

const reserveHandler = async (event) => {
  event.preventDefault();

  const currentTime = moment();

  const request_time = moment(window.location.href.split('/').at(-1).replaceAll('C', ':').replaceAll('S', 'T').replaceAll('D', '-'))

  const machine_id = event.target.id;
  const created_at = currentTime;
  const started_at = request_time;
  const reserve_time = moment(request_time).add(1, 'hours').add(15, 'minutes')
  const expire_at = moment(request_time).add(15, 'minutes')

  const response = await fetch (`/api/reservation`, {
    method: 'POST',
    body: JSON.stringify({ machine_id, created_at, started_at, reserve_time, expire_at}),
    headers: {
      'Content-type' : 'application/json'
    }
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }

  // const request_time = 
}

document
  .querySelectorAll('.available-machine-form')
  .forEach(button => {button.addEventListener('submit', reserveHandler)});