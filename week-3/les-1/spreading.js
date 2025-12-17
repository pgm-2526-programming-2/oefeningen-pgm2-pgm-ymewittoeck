//Operators
// > < === !== 

// Spread and Rest operator
//Drie puntjes: ...

const numbers = [1, 2, 3]
console.log(numbers,  ...numbers)

//Reden om te spreaden
//1. Kopie maken van een referentie datatypen
const students = ["mert", "Yens"]
const friends = students


// const people = [students];
const people = [...students];// Nieuwe array referentie kapot

console.log(people);

//2. Arrays samenvoegen
const apero = ["pintje", "Gin", "Mocktail"]
const snacks = ["frikandel", "chipjes"]

const menu = [...apero,"Cola" , ...snacks]

//3. Wanneer een methode geen arrays aanvaardt
Math.max(3, 5, 7, 1, 2)
Math.max(...numbers)


//Dit werkt ook allemaal met objecten
const auto = {
    brand: "citroën",
    model: "C8",
    year: "2011"
}

const upgrade = {
    spoiler: true,
    extras: ["GPS", "Custom uitlaat"]
}

CaretPosition.upgrade = upgrade

const upgradedCar = {
    ...auto,
    ...upgrade
}


//Object Keys advanced syntax
const a = "Hello"

const obj = {
    a
}