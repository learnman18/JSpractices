var nav = document.querySelector(".nav");

window.addEventListener("scroll", stickyScroll);

function stickyScroll() {
    // var z = window.scrollY > nav.offsetHeight + 150;
    // console.log(z);

    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
}