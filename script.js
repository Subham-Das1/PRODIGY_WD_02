let timer;
        let startTime;
        let elapsedTime = 0;
        let running = false;

        function startTimer() {
            if (!running) {
                running = true;
                startTime = Date.now() - elapsedTime;
                timer = setInterval(updateTimer, 1000 / 60);
            }
        }

        function stopTimer() {
            running = false;
            clearInterval(timer);
        }

        function resetTimer() {
            running = false;
            clearInterval(timer);
            elapsedTime = 0;
            document.getElementById('timer').textContent = "00:00:00";
        }

        function updateTimer() {
            const currentTime = Date.now();
            elapsedTime = currentTime - startTime;

            const totalSeconds = Math.floor(elapsedTime / 1000);
            const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
            const seconds = (totalSeconds % 60).toString().padStart(2, '0');
            const milliseconds = Math.floor((elapsedTime % 1000) / 10).toString().padStart(2, '0');

            document.getElementById('timer').textContent = `${minutes}:${seconds}:${milliseconds}`;
        }