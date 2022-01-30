function toggleTheme() {
    let body = document.querySelector("body");
    return (body.dataset.theme =
        body.dataset.theme == "dark" ? "light" : "dark");
}
function toggleModal() {}
let stopWatch = {
    currentElapsed: 0,
    totalElapsed: 0,
    startTime: 0,
    endTime: 0,
    intervalId: 0,
    intervalIdDom: 0,
    isRunning: false,
    toggleStart() {
        if (this.isRunning) {
            this.endTime = Date.now();
            this.isRunning = false;
            clearInterval(this.intervalId);
            this.intervalId = 0;
            this.startTime = 0;
            this.endTime = 0;
            this.totalElapsed += this.currentElapsed;
        } else {
            this.startTime = Date.now();
            this.intervalId = setInterval(() => {
                this.endTime = Date.now();
                this.currentElapsed = Math.floor(
                    (this.endTime - this.startTime) / 1000
                );
            }, 2);
            this.isRunning = true;
        }
    },
    reset() {
        this.currentElapsed = 0;
        this.totalElapsed = 0;
        this.startTime = 0;
        this.endTime = 0;
        this.intervalId = 0;
        this.intervalIdDom = 0;
        this.isRunning = false;
    },
};
function toggleStopWatch(stopWatch) {
    let button = document.querySelector(".action-button");
    if (!stopWatch.isRunning) {
        button.childNodes[0].nodeValue = "Stop";
        button.children[0].dataset.state = "started";
        stopWatch.toggleStart();
        let hour = document.querySelector(".card .hour");
        let minute = document.querySelector(".card .minute");
        let second = document.querySelector(".card .second");
        stopWatch.intervalIdDom = setInterval(() => {
            // hour.textContent = Math.floor()
            let minuteElapsed = Math.floor(
                (stopWatch.totalElapsed + stopWatch.currentElapsed) / 60
            );
            let secondsElapsed =
                stopWatch.totalElapsed + (stopWatch.currentElapsed % 60);
            minute.textContent =
                minuteElapsed.toString().length == 1
                    ? `0${minuteElapsed}`
                    : minuteElapsed;
            second.textContent =
                secondsElapsed.toString().length == 1
                    ? `0${secondsElapsed}`
                    : secondsElapsed;
        }, 2);
    } else {
        button.childNodes[0].nodeValue = "Start";
        button.children[0].dataset.state = "stopped";
        stopWatch.toggleStart();
        clearInterval(stopWatch.intervalIdDom);
    }
}

function resetStopWatch(stopWatch) {
    let button = document.querySelector(".action-button");
    button.childNodes[0].nodeValue = "Start";
    button.children[0].dataset.state = "stopped";
    stopWatch.toggleStart();
    clearInterval(stopWatch.intervalId);
    clearInterval(stopWatch.intervalIdDom);
    stopWatch.reset();
    let hour = document.querySelector(".card .hour");
    let minute = document.querySelector(".card .minute");
    let second = document.querySelector(".card .second");
    hour.textContent = minute.textContent = second.textContent = "00";
}
