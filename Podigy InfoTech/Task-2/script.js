const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapTimesList = document.getElementById('lap-times');

let intervalId;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    timerDisplay.textContent = formattedTime;
}

function startTimer() {
    intervalId = setInterval(updateTimer, 10);
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
}

function pauseTimer() {
    clearInterval(intervalId);
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;
}

function resetTimer() {
    clearInterval(intervalId);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    timerDisplay.textContent = '00:00:00';
    lapTimesList.innerHTML = '';
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
}

function lapTime() {
    const li = document.createElement('li');
    li.textContent = timerDisplay.textContent;
    lapTimesList.appendChild(li);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', lapTime);