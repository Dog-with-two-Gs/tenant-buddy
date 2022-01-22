const init = () => {
    const reserveTime = document.querySelector('#reservation-time');

    const currentTime = moment().format("YYYY-MM-DDThh:mm");
    const weekTime = moment(currentTime).add(7, 'days').format("YYYY-MM-DDThh:mm");

    reserveTime.setAttribute('min', `${currentTime}`);
    reserveTime.setAttribute('max', `${weekTime}`);
};

const reserveNowHandler = async (event) => {
    event.preventDefault();

    const currentTime = moment()//.format("YYYY-MM-DDThh:mm");

    const machine_id = event.target.id;
    const created_at = currentTime;
    const started_at = currentTime;
    const reserve_time = moment(currentTime).add(1, "hour").add(15, 'minutes')//.format("YYYY-MM-DDThh:mm");
    const expire_at = moment(currentTime).add(15, "minutes")//.format("YYYY-MM-DDThh:mm");

    if (machine_id && created_at && started_at && reserve_time && expire_at) {
        const response = await fetch(`/api/reservation`, {
            method: 'POST',
            body: JSON.stringify({ machine_id, created_at, started_at, reserve_time, expire_at }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // document.location.reload();
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

    const selectTime = moment(document.querySelector('#reservation-time').value);

    const test = selectTime.format("YYYY-MM-DD HH:mm:ss");
    const test2 = test.replaceAll(':', 'C').replaceAll('-', 'D').replace(' ', 'S')

    console.log(test)
    // console.log(selectTime)
    // console.log(test)

       if(selectTime) document.location.replace(`/futureres/${test2}`);
    
}

init();

document
    .querySelectorAll('.available-machine-form').forEach(button => { button.addEventListener('submit', reserveNowHandler) })

document
    .querySelector('#reserve-machine')
    .addEventListener('submit', reserveTimeHandler)