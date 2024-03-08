const jokesEl = document.getElementById("jokesBx");
const jokesBtn = document.getElementById("jokesBtn");

addEventListener("click", generateJoke);
generateJoke();

function generateJoke() {
    var config = {
        headers: {
            Accept: "application/json"
        },
    }

    fetch("https://icanhazdadjoke.com", config)
        .then((res) => res.json())
        .then((data) => {
            jokesEl.innerHTML = data.joke;

        })

}