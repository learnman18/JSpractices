var smallCups = document.querySelectorAll(".cup-small");
var percentage = document.getElementById("percentage");
var remaind = document.getElementById("remaind");
var liters = document.getElementById("liters");

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightCup(idx));
})

function highlightCup(idx) {
    console.log("index : " + idx);
    if ((smallCups[idx].classList.contains("full")) && (!smallCups[idx].nextElementSibling.classList.contains("full"))) {
        idx--;
        //console.log("after decrement : " + idx)
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
        //console.log("index 2 : " + idx2);
    })

    updateBigCup();
}


function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    var totalCups = smallCups.length;
    //console.log("length of small cup : " + smallCups.length);

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups / totalCups * 300}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if (fullCups === totalCups) {
        remaind.style.visibility = "hidden";
        remaind.style.height = 0
    } else {
        remaind.style.visibility = "visible";
        liters.innerText = `${2 - (250 * fullCups / 1000)} L`;
    }

}