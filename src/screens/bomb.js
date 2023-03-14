let time = 300000;
const speed = 100;

timer = setInterval(() => {
  time -= speed;

  const minutes = Math.floor(time / 60000).toString().padStart(2, '0');
  const seconds = ((time % 60000) / 1000).toFixed(0).padStart(2, '0');
  const milliseconds = ((time % 1000) / 10).toFixed(0).padStart(2, '0');

  document.getElementById('minutes-1').innerHTML = minutes.substring(0,1)
  document.getElementById('minutes-2').innerHTML = minutes.substring(1)
  document.getElementById('seconds-1').innerHTML = seconds.substring(0,1)
  document.getElementById('seconds-2').innerHTML = seconds.substring(1)
  document.getElementById('milliseconds-1').innerHTML = milliseconds.substring(0,1)
  document.getElementById('milliseconds-2').innerHTML = milliseconds.substring(1)
}, speed);
