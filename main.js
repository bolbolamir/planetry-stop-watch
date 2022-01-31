function toggleTheme() {
    let body = document.querySelector("body");
    return (body.dataset.theme =
        body.dataset.theme == "dark" ? "light" : "dark");
}
let planets = [
    {
        name: "Earth",
        factor: 1,
        imageSrc: "https://i.postimg.cc/w770mfz5/earth-globe.png",
    },
    {
        name: "Mercury",
        factor: 0.5,
        imageSrc: "https://i.postimg.cc/CdMvFM6Q/mercury.png",
    },
    {
        name: "Moon",
        factor: 2,
        imageSrc: "https://i.postimg.cc/8fCwww6S/moon.png",
    },
    {
        name: "Mars",
        factor: 0.2,
        imageSrc: "https://img.icons8.com/color/50/000000/mars-movingImg.png",
    },
];
function setPreferedTheme() {
    let preferedTheme = window.matchMedia("(prefers-color-scheme: dark)");
    preferedTheme.addEventListener("change", toggle);
    function toggle(e) {
        let body = document.querySelector("body");
        if (preferedTheme.matches) {
            body.dataset.theme == "dark" ? "Already dark" : toggleTheme();
        } else {
            body.dataset.theme == "dark" ? toggleTheme() : "Already light";
        }
    }
    toggle();
}
setPreferedTheme();
function toggleModal() {}
let stopWatch = {
    currentElapsed: 0,
    totalElapsed: 0,
    startTime: 0,
    endTime: 0,
    intervalId: 0,
    elapsingFactor: 1,
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
                    (this.endTime - this.startTime) /
                        (1000 * this.elapsingFactor)
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
    let hour = document.querySelector(".card .hour");
    let minute = document.querySelector(".card .minute");
    let second = document.querySelector(".card .second");

    let liveText = document.querySelector(".card .timer");
    let liveRegion = document.querySelector(".card .live-region");
    if (!stopWatch.isRunning) {
        button.childNodes[0].nodeValue = "Stop";
        button.children[0].dataset.state = "started";
        stopWatch.toggleStart();

        liveRegion.ariaLive = "off";
        liveText.ariaLabel = "0 seconds";

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
    button.childNodes[0].nodeValue = "Start";
    button.children[0].dataset.state = "stopped";
    stopWatch.toggleStart();
    clearInterval(stopWatch.intervalId);
    clearInterval(stopWatch.intervalIdDom);
    stopWatch.reset();
    liveRegion.ariaLive = "off";
    liveText.ariaLabel = "0 seconds";
    let hour = document.querySelector(".card .hour");
    let minute = document.querySelector(".card .minute");
    let second = document.querySelector(".card .second");
    hour.textContent = minute.textContent = second.textContent = "00";
}
function changePlanet(stopWatch) {
    let images = document.querySelectorAll(".movingImg");
    let planetsElement = document.querySelector(".options");
    let planet = planetsElement.value;
    for (const iterator of planets) {
        if (planet == iterator.name) {
            stopWatch.elapsingFactor = iterator.factor;
            images[0].src = iterator.imageSrc;
            images[1].src = iterator.imageSrc;
        }
    }
}
function toggleModal() {
    let body = document.querySelector("body");
    let helpButton = document.querySelector(".modal-toggle");
    let state = (body.dataset.modal =
        body.dataset.modal == "hidden" ? "visible" : "hidden");
    if (state == "visible") {
        let article = document.createElement("article");
        let p = document.createElement("p");
        p.textContent =
            "Welcome to my planetry timer! creator : amir-reza-tavakkoli@github";
        article.appendChild(p);
        article.className = "modal";
        body.appendChild(article);
        helpButton.textContent = "❌";
    } else {
        let closingModal = document.querySelector(".modal");
        closingModal = null;
        helpButton.textContent = "?";
        console.log("hhh");
    }
}
