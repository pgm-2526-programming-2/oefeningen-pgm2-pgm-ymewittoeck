const process = require("process");
const pathModule = require ("path")
const fileSystemModule = require("fs")

// const studentsPath = "./students.json"
const studentsPath = pathModule.join('.', 'students.json');

//Filesystem kan om bestanden te lezen
const fileContent = fileSystemModule.readFileSync(studentsPath, "utf-8")
const fileContentAsArray = JSON.parse(fileContent)
fileContentAsArray.push({
    name:"Yens",
    age: 25
})
console.log(fileContentAsArray)

fileSystemModule.writeFileSync(studentsPath, JSON.stringify(fileContentAsArray))

//Dit werkt op mijn lokaal toestal
//Zo gebruikt Linux \ in plaats van /
// const pathtoFunctionsCourse = "../../week_1/les_1/functions.js"
const pathtoFunctionsCourse = pathModule.join('..', '..','week_1', 'les_1', 'functions.js')

// nut van path
// platformonafhankelijk (/ vs \)
//veiliger/robuster - speciale tekens woals spatie kunnen
//toekomst! Nieuwe OS?
console.log(__dirname)