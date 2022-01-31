import { setPreferedTheme, toggleTheme } from "./theme.js";
import { toggleModal } from "./modal.js";
import { changePlanet } from "./planet.js";
import { resetStopWatch, toggleStopWatch } from "./timer.js";

// Todo :
// - accessible modal and tab order and focus managment for KB users
// - fix blur animation
// - better nameing
// - refactoring JS
// - find and fix typos

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

let actionButton = document.querySelector(".card .action-button");
actionButton.addEventListener("click", () => {
    toggleStopWatch(stopWatch);
});

let themeToggle = document.querySelector(".dash-board .theme-toggle");
themeToggle.addEventListener("click", () => {
    toggleTheme();
});

let modalToggle = document.querySelector(".dash-board .modal-toggle");
modalToggle.addEventListener("click", () => {
    toggleModal();
});

let resetButton = document.querySelector(".card .reset-button");
resetButton.addEventListener("click", () => {
    resetStopWatch(stopWatch);
});

let optionsList = document.querySelector(".card .options");
optionsList.addEventListener("change", () => {
    changePlanet(stopWatch);
});

setPreferedTheme();
