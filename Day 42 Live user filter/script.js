var resultEL = document.getElementById("result");
var filterTxt = document.getElementById("filter");
var listItem = [];

getData();

filterTxt.addEventListener("input", (e) => {
    filterUserNameAndAddress(e.target.value);
})
//OR filterTxt.addEventListener("input" , (e) => filterUserNameAndAddress(e.target.value))

async function getData() {
    //here we are trying to get 50 users data so we have put the results=100
    const res = await fetch("https://randomuser.me/api?results=100");
    const { results } = await res.json();
    //either we can store the data of api results which is data.results in new variable like below line or there is one more way we have used like the above line both will give the same result
    // const data = await res.json(); // const results = data.results; // console.log(reults)
    console.log(results);

    resultEL.innerHTML = "";
    console.log("cleared");

    results.forEach(user => {
        const li = document.createElement("li");
        listItem.push(li);
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h3 class="user-name">${user.name.first} , ${user.name.last}</h3>
            <small class="user-address">${user.location.city} , ${user.location.country}</small>
        </div>
        `
        resultEL.appendChild(li);

    });

}


function filterUserNameAndAddress(searchedText) {
    listItem.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchedText.toLowerCase())) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide")
        }
    })
}