
const display = document.getElementById("game");

let app = new PIXI.Application({
    width: window.innerWidth / 1.5,
    height: window.innerHeight / 1.5,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: "0xAFEEEE",
});

display.appendChild(app.view);