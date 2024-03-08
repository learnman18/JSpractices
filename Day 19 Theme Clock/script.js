const toggle = document.querySelector(".toggle");



toggle.addEventListener("click", (e) => {
    const html = document.querySelector("html");
    console.log("clicked");
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        e.target.innerHTML = "Dark Mode";
    } else {
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode";
    }
});