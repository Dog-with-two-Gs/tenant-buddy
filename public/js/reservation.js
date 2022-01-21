const reserveTime = document.querySelector('#reservation-time');

const currentTime = moment().format("YYYY-MM-DDThh:mm");
const weekTime = moment(currentTime).add(7, 'days').format("YYYY-MM-DDThh:mm");

reserveTime.setAttribute('min', `${currentTime}`);
reserveTime.setAttribute('max', `${weekTime}`);

const reserveNowHandler = async (event) => {
    event.preventDefault();

    const machine_id = event.target.id;
    const created_at = currentTime;
    const started_at = currentTime;
    const reserve_time = currentTime;
    const status_id = 2;

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
            alert(response.statusText);
        };
    };

    if (status_id) {
        const response = await fetch(`/api/machine/${machine_id}`, {
            method: 'PUT',
            body: JSON.stringify({ status_id }),
            header: {
                'Content-Type': 'application/json',
            },
        });
    };
};

const reserveTimeHandler = async (event) => {
    event.preventDefault();
    
    console.log(reserver);

}

document
  .querySelectorAll('.available-machine-form').forEach(button => {button.addEventListener('submit', reserveNowHandler)})

document
    .querySelector('#reserve-machine')
    .addEventListener('submit', reserveTimeHandler)