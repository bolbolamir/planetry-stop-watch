function toggleStopWatch(stopWatch) {
    let button = document.querySelector(".action-button");
    let hour = document.querySelector(".card .hour");
    let minute = document.querySelector(".card .minute");
    let second = document.querySelector(".card .second");

    let liveText = document.querySelector(".card .timer");
    let liveRegion = document.querySelector(".card .live-region");

    let lightIndicator = document.querySelector(".action-button > div");

    if (!stopWatch.isRunning) {
        button.childNodes[0].nodeValue = "Stop";
        button.children[0].dataset.state = "started";
        stopWatch.toggleStart();

        lightIndicator.dataset.state = "started";

        liveRegion.ariaLive = "off";
        liveText.ariaLabel = "0 seconds";

        stopWatch.intervalIdDom = setInterval(() => {
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
        lightIndicator.dataset.state = "stopped";
        button.childNodes[0].nodeValue = "Start";
        button.children[0].dataset.state = "stopped";

        stopWatch.toggleStart();

        clearInterval(stopWatch.intervalIdDom);

        let title = `Stop Watch - ${hour.textContent}:${minute.textContent}:${second.textContent}`;
        document.title = title;

        let liveString = `${second.textContent} seconds and ${minute.textContent}
        minutes and ${hour.textContent} hours`;
        liveText.ariaLabel = liveString;
        liveRegion.ariaLive = "assertive";
    }
}

function resetStopWatch(stopWatch) {
    let liveRegion = document.querySelector(".card .live-region");
    let liveText = document.querySelector(".card .timer");
    let button = document.querySelector(".action-button");
    let hour = document.querySelector(".card .hour");
    let minute = document.querySelector(".card .minute");
    let second = document.querySelector(".card .second");

    button.childNodes[0].nodeValue = "Start";
    button.children[0].dataset.state = "stopped";

    stopWatch.toggleStart();

    clearInterval(stopWatch.intervalId);
    clearInterval(stopWatch.intervalIdDom);

    stopWatch.reset();

    liveRegion.ariaLive = "off";
    liveText.ariaLabel = "0 seconds";

    hour.textContent = minute.textContent = second.textContent = "00";
}

export { resetStopWatch, toggleStopWatch };
