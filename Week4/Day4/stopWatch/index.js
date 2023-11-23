let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isPaused = false;

function startPauseResume() {
  if (timer && !isPaused) {
    clearInterval(timer);
    isPaused = true;
    document.querySelector(".start").innerText = "Resume";
  } else {
    if (isPaused) {
      timer = setInterval(updateTime, 1000);
      isPaused = false;
      document.querySelector(".start").innerText = "Pause";
    } else {
      timer = setInterval(updateTime, 1000);
      document.querySelector(".start").innerText = "Pause";
    }
  }
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
    seconds
  )}`;
  document.getElementById("stopwatch").innerText = timeString;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function reset() {
  clearInterval(timer);
  timer = null;
  isPaused = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("stopwatch").innerText = "00:00:00";
  document.querySelector(".start").innerText = "Start";
}
