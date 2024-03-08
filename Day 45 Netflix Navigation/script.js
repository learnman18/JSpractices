var open_btn = document.querySelector(".opn-btn");
var close_btn = document.querySelector(".close-btn");
var nav = document.querySelectorAll(".nav");


open_btn.addEventListener("click", () => {
    nav.forEach(nav_el => nav_el.classList.add("visible"))
})

close_btn.addEventListener("click", () => {
    nav.forEach(nav_el => nav_el.classList.remove("visible"))
})