function projectsCreations(input) {
let name = input[0];
let numProject = Number(input[1]);
let neededTime = Number(numProject * 3);
console.log(`The architect ${name} will need ${neededTime} hours to complete ${numProject} project/s.`)
}

projectsCreations(["Sanya ",
"9 "]
)