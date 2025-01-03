let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Draw initial rectangle
ctx.rect(20, 20, 100, 100);
ctx.fillStyle = "#000"; // Initial fill color
ctx.fill();         

document
    .getElementById("color-change-on-click")
    .addEventListener("click", changedColor);

function changedColor () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ctx.fillStyle = randomColor;
    ctx.fillRect(20, 20, 100, 100);
}