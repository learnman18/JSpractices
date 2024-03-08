const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUsername(username) {
    try {
        var { data } = await axios(APIURL + username);
        // above line is same as stroing it in a variable like res and accessing the object 'data' of the API's json file i.e = res.data
        console.log(data);
        createUserCard(data);
    } catch (err) {
        console.log(err);
        if (err.response.status == 404) {
            // createErrCard("The profile " + "'" + username + "'" + " searching for is not found");
            createErrCard(username);
        }
    }
}

function createUserCard(data) {
    const userCardHTML = `<div class="card">
    <div>
        <img src="${data.avatar_url}" alt="${data.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2 class="user-name">${data.name}</h2>
        <p class="user-bio">${data.bio}.</p>
        <ul>
            <li>${data.following}<strong>Follwoing</strong></li>
            <li>${data.followers}<strong>Followers</strong></li>
            <li>${data.public_repos}<strong>Repos</strong></li>
        </ul>
        <div class="repos">
            <a href="#" class="repo">repo1</a>
            <a href="#" class="repo">repo2</a>
            <a href="#" class="repo">repo3</a>
        </div>
    </div>
</div>`

    main.innerHTML = userCardHTML;

}


function createErrCard(msg) {
    const userErrHTML = `<div class="card">
        <h1>"The profile '<span class="msg">${msg}</span>' searching for is not found"</h1>
    </div>`

    main.innerHTML = userErrHTML;
}

form.addEventListener("submit", (e) => {

    e.preventDefault();
    var user = search.value;
    if (user) {
        getUsername(user);
    }
    search.value = "";
})








/*
using async and await

async function getUsername(username) {
    var res = await fetch(APIURL + username);
    var data = await res.json();
    console.log(data);
}

//OR

function getUsername(username) {
    axios(APIURL + username)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

getUsername("learnman18");

*/

//using axios & promise


