const toggleLabl = document.querySelectorAll(".lables");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggleLabl.forEach((toggleEl) => {
    toggleEl.addEventListener("change", function (e) {
        doTheTrick(e.target);
    })
});

function doTheTrick(theClickdOne) {
    console.log("heello");
    if (good.checked && cheap.checked && fast.checked) {
        if (good == theClickdOne) {
            fast.checked = false;
        }
        if (cheap == theClickdOne) {
            good.checked = false;
        }
        if (fast == theClickdOne) {
            cheap.checked = false
        }
    }
}