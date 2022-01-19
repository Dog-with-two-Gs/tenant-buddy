const reserveTime = document.querySelector('#reservation-time');

var currentTime = moment().format("YYYY-MM-DDThh:mm");
var weekTime = moment(currentTime).add(7, 'days').format("YYYY-MM-DDThh:mm");

reserveTime.setAttribute('min', `${currentTime}`);
reserveTime.setAttribute('max', `${weekTime}`);

const reserveNowHandler = async (event) => {
    event.preventDefault();

    const machine_id = document.querySelector('#machineId').innerHTML;
    const created_at = currentTime;
    const started_at = currentTime;
    const reserve_time = currentTime;

    console.log(machine_id)
    if (machine_id && created_at && started_at && reserve_time) {
        const response = await fetch(`/api/reservation`, {
            method: 'POST',
            body: JSON.stringify({ machine_id, created_at, started_at, reserve_time }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText)
        };
    };
};

document
  .querySelector('.available-machine-form')
  .addEventListener('submit', reserveNowHandler)