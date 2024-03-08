var addBtn = document.getElementById("add");

var getLsNotes = JSON.parse(localStorage.getItem("notes"));



if (getLsNotes) {
    getLsNotes.forEach(localNotes => addNotesFunc(localNotes));
}

addBtn.addEventListener("click", () => {
    addNotesFunc();
})


function addNotesFunc(text = "") {
    var note = document.createElement("div");
    note.classList.add("notes");

    note.innerHTML = `
        <div class="tool">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete" id="delete"><i class="fas fa-trash"></i></button>
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
        `

    var deleteBtn = note.querySelector("#delete");//how to get ID or calss from node itself.
    var editBtn = note.querySelector(".edit");
    var main = note.querySelector(".main");
    var textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = text;

    //to display value is textarea & main if it has some contnet e.g = text ="" , so here it will have value like text = "sdfsd".
    //this line works when we have store it in local storage and displaying it after loading the page


    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS();
    });

    //delete button to delete the appended child

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
        textArea.focus();
    })

    //edit button when we click on edit icon we will able edit and not edit by using toggle method. main is div and textArea is textarea so we can toggle both. when we will click on edit button it will remove & add the hidden class.

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = value;

        //we can write this like as well const 
        // const userText = e.target.value;
        // main.innerHTML = userText;

        updateLS()
    })

    //it will display the contnet we will type in notes. if we don't use this once we enter the text , that text will be inside the notes but won't show the upated text once we stop editing but the text will be inside but it just won't be visible until we click on edit button to edit.

    document.body.appendChild(note)
}

function updateLS() {
    var textAreaNotes = document.querySelectorAll("textarea");

    allNotes = [];
    textAreaNotes.forEach(txtNotes => allNotes.push(txtNotes.value))
    localStorage.setItem("notes", JSON.stringify(allNotes));

    console.log(allNotes);

}

