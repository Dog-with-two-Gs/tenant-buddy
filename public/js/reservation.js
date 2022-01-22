const init = () => {
    const reserveTime = document.querySelector('#reservation-time');

    const currentTime = moment().format("YYYY-MM-DDThh:mm");
    const weekTime = moment(currentTime).add(7, 'days').format("YYYY-MM-DDThh:mm");

    reserveTime.setAttribute('min', `${currentTime}`);
    reserveTime.setAttribute('max', `${weekTime}`);
};

const reserveNowHandler = async (event) => {
    event.preventDefault();

    const currentTime = moment()

    const machine_id = event.target.id;
    const created_at = currentTime;
    const started_at = currentTime;
    const reserve_time = moment(currentTime).add({ hours: 0, minutes: 1 })
    const expire_at = moment(currentTime).add(15, "minutes")
    const is_complete = false;

    if (machine_id && created_at && started_at && reserve_time && expire_at) {
        const response = await fetch(`/api/reservation`, {
            method: 'POST',
            body: JSON.stringify({ machine_id, created_at, started_at, reserve_time, expire_at, is_complete }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('Pat is great!')
        } else {
            alert(response.statusText);
        };
    };

    if (machine_id) {
        const response = await fetch(`/api/machine/reserve/${machine_id}`, {
            method: 'PUT',
            header: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        };
    };
};

const reserveTimeHandler = async (event) => {
    event.preventDefault();


}

init();

document
    .querySelectorAll('.available-machine-form').forEach(button => { button.addEventListener('submit', reserveNowHandler) })

document
    .querySelector('#reserve-machine')
    .addEventListener('submit', reserveTimeHandler)