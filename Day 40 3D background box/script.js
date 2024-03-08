var btn = document.getElementById("magic");
var boxesContainer = document.getElementById("boxes");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"))

function createBox() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.backgroundPosition = `${-j * 100}px ${-i * 100}px`
            boxesContainer.appendChild(box);
            console.log("value of i & J" + i, j)
        }
    }
}

createBox()