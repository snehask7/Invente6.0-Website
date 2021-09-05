const year = new Date().getFullYear();
const invente = new Date(2021, 9, 7).getTime();

let timer = setInterval(function () {
  const today = new Date().getTime();
  let diff;
  diff = invente - today;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days_num').innerHTML = days;
  document.getElementById('hours_num').innerHTML = hours;
  document.getElementById('minutes_num').innerHTML = minutes;
  document.getElementById('seconds_num').innerHTML = seconds;
}, 1000);
