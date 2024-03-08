var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let size = 10;
let color = "black"

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

drawCircle(100, 100)