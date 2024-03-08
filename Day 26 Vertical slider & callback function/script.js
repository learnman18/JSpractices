const slideContainer = document.querySelector(".slider-container");
const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");
const buttonUp = document.querySelector(".button-up");
const buttonDown = document.querySelector(".button-down");
const slideLength = rightSlider.querySelectorAll("div");


var currentActiveIndex = 0;

leftSlider.style.top = `-${(slideLength - 1) * 100}vh`;

//console.log(slideLength.length);

buttonUp.addEventListener("click", () => changeSlide('up'));

//OR
// buttonUp.addEventListener("click", function(){
//     changeSlide("up")
// });

buttonDown.addEventListener("click", () => changeSlide('down'));

function changeSlide(direction) {
    let sliderHeight = slideContainer.clientHeight;
    console.log(sliderHeight)
    if (direction === "up") {
        currentActiveIndex++;
        if (currentActiveIndex > slideLength.length - 1) {
            currentActiveIndex = 0
        }
    } else if (direction === "down") {
        currentActiveIndex--;
        if (currentActiveIndex < 0) {
            currentActiveIndex = slideLength.length - 1
        }
    }

    rightSlider.style.transform = `translateY(-${currentActiveIndex * sliderHeight}px)`;
    leftSlider.style.transform = `translateY(-${currentActiveIndex * sliderHeight}px)`;
}


