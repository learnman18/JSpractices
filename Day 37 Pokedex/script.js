var mainContainer = document.getElementById("poke-container");
var pokeCount = 150;

var colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "FCF7DE",
    water: "DEF3FD",
    ground: "#f4e7da",
    flying: "F5F5F5",
    normal: "#F5F5F5",
    fighting: "#E6E0D4"
}

const main_type = Object.keys(colors);
console.log(main_type)

fetchPokemon = async () => {
    for (let i = 1; i <= pokeCount; i++) {
        await getPokemon(i);
    }
}

getPokemon = async (id) => {
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    var res = await fetch(url);
    var data = await res.json();
    // console.log(data);
    createPokemonCard(data)
}

//pokemonPara has been passed with the data while calling it which contains all the JSON data of pokeapi.

createPokemonCard = (pokemonPara) => {
    pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    // to display first letter in capital and rest of the letters in small. we can also write like this as well ${pokemonPara.name}
    const cartoonName = pokemonPara.name[0].toUpperCase() + pokemonPara.name.slice(1);
    //to start the id with 00 e.g #001
    const cartoonID = pokemonPara.id.toString().padStart(3, '0');

    // const poke_type = pokemonPara.types.map(function (type) {
    //     return type.type.name
    // })
    //ORRRR
    const poke_type = pokemonPara.types.map(type => type.type.name);
    const type = main_type.find(type => poke_type.indexOf(type) > -1);
    const color = colors[type];

    pokemonEl.style.background = color;

    addPokemonDetails = `
    <div class="img-container">
       <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemonPara.id}.png" alt="Pokemon">
    </div>
    <div class="info">
        <span class="number">#${cartoonID}</span>
        <h3 class="name">${cartoonName}</h3>
        <small class="type">Type:<span>${type}</span></small>
    </div>
    `
    //line number 58 marked for debug could be write like this as well: <small class="type">Type:<span>${pokemonPara.types[0].type.name}</span></small>

    pokemonEl.innerHTML = addPokemonDetails;
    mainContainer.appendChild(pokemonEl);
}

fetchPokemon()