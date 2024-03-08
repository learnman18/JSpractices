const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        var x = e.clientX;
        var y = e.clientY;

        var buttonTop = e.target.offsetTop;
        var buttonLeft = e.target.offsetLeft;

        const insideTop = y - buttonTop;
        const insideLeft = x - buttonLeft;

        var circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = insideTop + "px";
        circle.style.left = insideLeft + "px";

        this.appendChild(circle);	//this method doesn't work with arrow function.
        //we can use it arrow function like this.
        //e.target.appendChild(circle);
        //button.appendChild(circle);

        console.log(`x = ${x} and y = ${y}`);
        console.log(`offSetTop = ${buttonTop} \n offSetLeft = ${buttonLeft}`)

    });
})

