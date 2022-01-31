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

export { changePlanet };
