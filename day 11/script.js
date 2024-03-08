var insert = document.getElementById("insrt");

window.addEventListener("keydown", (event) => {
    insert.innerHTML = `
    <div class="key">
        ${event.key === " " ? "space" : event.key} 
    <small>event key</small>
    </div>
    <div class="key">
        ${event.keyCode}
    <small>event keyCode</small>
    </div>
    <div class="key">
        ${event.code}
    <small>keyA</small>
    </div>
    `
    // console.log(event);
    //check the console.log(event) to understand each key objects. like code , key , keyCode , etc. 
})