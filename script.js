let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  document.getElementById("timer").textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
}

function resetTimer() {

  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById("timer").textContent = "00:00.00";
}

function startTimer() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
  }
}
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = undefined;
}
