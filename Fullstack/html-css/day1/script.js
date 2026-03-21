let name = "Hemaa";

function greet() {
    console.log("Hello " + name);
}

greet();

const skills = ["React","Spring Boot","Python","Machine Learning"];

skills.map(skill => {
    console.log("Skill:", skill);
});

function greetUser() {
    let name = document.getElementById("nameInput").value;

    document.getElementById("output").innerText =
        "Hello " + name;
}