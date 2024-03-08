const candidates = [
    { name: "Manish", subject: "JavaScript" },
    { name: "Pandey", subject: "HTML" }
]

var enrollCandidate = (students, callback) => {
    setTimeout(() => {
        callback(candidates);
        candidates.push(students);
        console.log("Candidate enrolled as student FIRST");
    }, 3000)
}

var getCandidates = (candidates) => {
    setTimeout(() => {
        var str = "";
        candidates.forEach(candidate => {
            str += `<li>${candidate.name}</li>`
            // str += "<li>" + candidate.name + "</li>"
        });
        document.getElementById("students").innerHTML = str;
        console.log("student name is fetched SECOND");
    }, 1000)
}

var newCandidate = { name: "DM", subject: "NodeJS" }
enrollCandidate(newCandidate, getCandidates);
//getCandidates(candidates);

