year = new Date().getFullYear();
invente = new Date(2021, 9, 8).getTime();

timer = setInterval(function () {
  const today = new Date().getTime();
  let diff;
  diff = invente - today;
  if (diff > 0) {
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
  } else {
    days = '00';
    hours = '00';
    minutes = '00';
    seconds = '00';
  }
  if (document.getElementById('days_num'))
    document.getElementById('days_num').innerHTML = days;
  if (document.getElementById('hours_num'))
    document.getElementById('hours_num').innerHTML = hours;
  if (document.getElementById('minutes_num'))
    document.getElementById('minutes_num').innerHTML = minutes;
  if (document.getElementById('seconds_num'))
    document.getElementById('seconds_num').innerHTML = seconds;
  else {
    clearInterval(timer);
  }
}, 1000);
