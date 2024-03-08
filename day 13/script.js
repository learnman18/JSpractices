const txtArea = document.getElementById("textarea");
const tagEl = document.getElementById("tags");

txtArea.addEventListener("keyup", function createTags(e) {
    var txtVals = e.target.value;
    var spilTxt = txtVals.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());

    tagEl.innerHTML = "";

    if (e.key == "Enter") {
        setTimeout(() => {
            let x = e.target.value = "";
            console.log("after entering : " + x);
        }, 100)
        randomFun();
    }

    spilTxt.forEach(tag => {
        tagEl.classList.remove("tgRe");
        var tagSpanEl = document.createElement("span");
        tagSpanEl.innerText = tag;
        tagSpanEl.classList.add("tag");
        tagEl.appendChild(tagSpanEl);
    });

    if (txtArea.value === "") {
        tagEl.classList.add("tgRe");
        console.log("empty");
    }
    console.log(spilTxt);
})

function randomFun() {
    console.log("123");
    const times = 30;

    var allTags = document.querySelectorAll(".tag")
    //when we create span element and append and add tag classList so we are getting all the spans

}
