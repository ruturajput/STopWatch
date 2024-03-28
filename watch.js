let timer;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let isRunning = false;

        function startTimer() {
            isRunning = true;
            timer = setInterval(updateTimer, 1000);
        }

        function stopTimer() {
            isRunning = false;
            clearInterval(timer);
        }

        function resetTimer() {
            isRunning = false;
            clearInterval(timer);
            seconds = 0;
            minutes = 0;
            hours = 0;
            updateDisplay();
        }

        function updateTimer() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }

        function updateDisplay() {
            const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
            document.getElementById('timer').textContent = formattedTime;
        }

        function pad(value) {
            return value < 10 ? '0' + value : value;
        }

        document.getElementById('startButton').addEventListener('click', function () {
            if (!isRunning) {
                startTimer();
            }
        });

        document.getElementById('stopButton').addEventListener('click', function () {
            if (isRunning) {
                stopTimer();
            }
        });

        document.getElementById('restartButton').addEventListener('click', function () {
            resetTimer();
        });

        // Initial display
        updateDisplay();
		