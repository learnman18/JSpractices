var next = document.getElementById("next");
var prev = document.getElementById("prev");
var progress = document.getElementById("progressBar");
var circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;
    //console.log(currentActive);
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener("click", () => {
    currentActive--;
    //console.log(currentActive);
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            //console.log("value of index" + idx);
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    var actives = document.querySelectorAll(".active");
    console.log("length of actives" + actives.length);
    //length of actives get increases when we click on next button and it adds active class to it.

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";
    console.log((actives.length - 1) / (circles.length - 1) * 100)


    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}



