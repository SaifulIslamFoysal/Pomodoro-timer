const timer = document.getElementById("timer");
const startBtn = document.getElementById("start-button");
const stopBtn = document.getElementById("stop-button");
const resetBtn = document.getElementById("reset-button");
let initialTimer = 1500;
let remainingTime = initialTimer;
let isRunning = false;
let intervalId;

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(() => {
      remainingTime--;

      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      timer.textContent = `${minutes}:${seconds < 10 ? "0" : " "} ${seconds} `;
      if (remainingTime <= 0) {
        clearInterval(intervalId);
        isRunning(false);
      }
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
});
resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  isRunning = false;
  remainingTime = initialTimer;
  timer.textContent = `${Math.floor(remainingTime / 60)}:00`;
});
