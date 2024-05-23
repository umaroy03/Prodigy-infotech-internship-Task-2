let timer;
let isRunning = false;
let lapCount = 1;

function startStop() {
    if (!isRunning) {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startStop').innerText = 'Stop';
        isRunning = true;
    } else {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startStop').innerText = 'Start';
    isRunning = false;
    lapCount = 1;
    document.getElementById('laps').innerHTML = '';
}

function updateDisplay() {
    let display = document.getElementById('display');
    let time = display.innerText.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    display.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function lap() {
    let laps = document.getElementById('laps');
    let lapTime = document.getElementById('display').innerText;
    let lapItem = document.createElement('li');
    lapItem.innerText = 'Lap ' + lapCount + ': ' + lapTime;
    laps.appendChild(lapItem);
    lapCount++;
}
