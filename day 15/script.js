const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        //+ sign is used it here to parse it from string to number, we can also use it parseInt
        //parseInt(counter.getAttribute("data-target")); OR
        //Number(counter.getAttribute("data-target"));
        //console.log(typeof target, target) = (typeof target , target ) value = target
        //console.log(typeof c);
        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${c + increment}`;
            setTimeout(updateCounter, 1);
        }
    }

    updateCounter()
})