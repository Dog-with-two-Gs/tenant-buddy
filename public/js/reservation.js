const reserveTime = document.querySelector('#reservation-time');

var currentTime = moment().format("YYYY-MM-DDThh:mm");
var weekTime = moment(currentTime).add(7, 'days').format("YYYY-MM-DDThh:mm");

console.log(currentTime);
console.log(weekTime);
reserveTime.setAttribute('min', `${currentTime}`);
reserveTime.setAttribute('max', `${weekTime}`);
