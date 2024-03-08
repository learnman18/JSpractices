var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");
var imgSlides = document.querySelectorAll(".imgs");
var imgsContainer = document.getElementById("imgsContainer");

var idx = 0;
rightBtn.addEventListener("click", () => {
    idx++;
    console.log("right button clicked" + idx)
    slider()
});
leftBtn.addEventListener("click", () => {
    idx--;
    console.log("left button clicked" + idx)
    slider();
});

function slider() {
    console.log(`total imagees ${imgSlides.length}`)
}

setInterval(run, 2000);

function run() {
    idx++;
    slider();
}

function slider() {
    if (idx > imgSlides.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = imgSlides.length - 1
    }

    imgsContainer.style.transform = `translateX(${idx * -500}px)`
}
