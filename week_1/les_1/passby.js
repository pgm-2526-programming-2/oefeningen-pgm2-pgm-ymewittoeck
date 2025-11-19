const name = 'jan' // Primitief
const age = 19  // Primitief
const isStudent = true  // Primitief
const hobbies = ['Gaming', 'voetbal']   // samengesteld of reference type
const addres = {
    street: 'New York straat',
    number: 4
}   // samengesteld of reference type


let nickName = 'Gamerboy'
const interests = hobbies
const todos = interests

nickName = 'blabla'
interests.push('Kitedinge')


let total = 0


function addFiveToNumber(a = 0) {
    total = a + 5
    console.log(a + 5)
}

addFiveToNumber(2)
console.log('totaal:', total)

function doubleNumber(num) {
    num = num * 2
    console.log('binnen functie:', num)
}

function doubleNumberWithReference(obj) {
    obj.number = obj.number * 2
    console.log('binnen referencie:', obj.number)
}

let originalNUmber = 5
let originalNUmberAsReferenceType = {
    number: 5
}

doubleNumber(originalNUmber)
doubleNumberWithReference(originalNUmberAsReferenceType)
console.log('original number uit functie',originalNUmber)
console.log('original number uit ref-functie',originalNUmberAsReferenceType)