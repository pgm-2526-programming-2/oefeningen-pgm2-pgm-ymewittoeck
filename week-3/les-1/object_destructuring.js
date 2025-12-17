const person = {
    firstName: "Yme",
    lastName: "age",
    age: 19
}

// const firstName = person.firstName // Belletje!
// const lastName = person.lastName
// const age = person.age


//const {firstName, lastName, age} = person



// verschil tussen array en Object destructruring; object is op basis van een key! Niet de index! Dus de volgerde maakt niet uit
const {firstName, age, gender = 'Male'} = person
console.log(age, gender) // 30, Undefined (male wanner default waarde)


// µNadeel van object destructuring! zelfde naam als key in object!
const options = {
    c: 20000,
    w:3000,
    mod: "C8",
    b: undefined
}

const {w: weight, mod: model, c: cost, b: brand = "citroen"} = options

const {w: altweight, ...rest} = options





const song = {
    name: "Flowers",
    artist: "Miley"
}

const edit = {
    name: "7 things"
}

function editSong(s, {name}) {
    s.name = name
}

console.log(editSong(song, edit))