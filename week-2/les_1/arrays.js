const games = ["Super Mario Bros", "Zelda", "N+ Game", "Pokemon"]
const favoriteGames = [{
    name: "Super Mario Bros",
    releaseYear: 1980
}, {
    name: "zelda",
    releaseYear: 1984
}]

const altGames = new Array()
Array.isArray(games)

const secondGame = games[1]
const altSecondGame = games.at(1)
const lastGame = games.at(-1)

const values = [
    "Adriaan",
    function() {
        console.log("hallo")
    }
]

const amountOfFavouriteGames = favoriteGames.length

games.length = 3
const topThree = games

games.length = 4
// console.log(games)



const stringArray = "[1, 2, 3, 4]"
const numbers = JSON.parse(stringArray)
console.log(typeof stringArray, typeof array)
numbers.push(5)

const numberString = JSON.stringify(numbers)
console.log()

const students = ["Nick", "Mert", "Yens"]
const people = ["Nick", "Mert", "Yens"]

console.log(students === people)

function areArraysEquel(arr1, arr2) {
if (arr1.length !== arr2.length) {
    return false
}

    return JSON.stringify(arr1) === JSON.stringify(arr2)
    
}

console.log(areArraysEquel(students, people))

const matrix = [
    ['0', '0', '0', '0'],
    ['0', '0', 'x', '0'],
    ['0', '0', '0', '0'],
    ['0', '0', '0', '0'],
]

matrix[2][1]

const colors = ["red", "blue", "green"]

for (let i = 0; i < colors.length; i++) {
    const currentColor = colors[i];
    console.log(currentColor)
}

colors.forEach((color) => {
    console.log(color) 
});

colors.push("eind")
colors.pop()
colors.unshift("Begin van array")
colors.shift()

console.log('Numbers', numbers)
const doubleNumbers = numbers.map((value, index) => {
    return value * 2
})

console.log('Double Numbers', doubleNumbers)

console.log('Double Numbers', doubleNumbers.join())

const numbersWithoutEight = doubleNumbers.filter((value) => {
    return value !== 8;
})

console.log(numbersWithoutEight)

numbers.some((number) => {
    return number === 8
})

numbers.every((number) => {
    return number === 8
})

// reduce
// van een array naar 1 getal te gaan (meestal een som/optelling

// const sales = [4, 10, 6]

// sales.reduce((preValue, currentValue) => {
//     return preValue + currentValue
// })

// loop 1: 0 + 4 = 4
// loop 2: 4 + 10 = 14
// loop 3: 14 + 6 = 20

const products = [
    { name: "shirt", price: 30},
    { name: "Shoes", price: 50},
    { name: "Hat", price: 15}
]

const totalSales = products.reduce((preValue, currentValue) => {

    return preValue + currentValue.price

}, 0)

console.log(totalSales)

