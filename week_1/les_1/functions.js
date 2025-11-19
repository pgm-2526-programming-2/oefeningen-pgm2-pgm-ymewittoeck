function sum(a, b) {
    
    return a + b
}
//oefeningen multiply, division
function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b
}


//Oefeningen: maak een functie showCalculation die 3 parameters heeft, 2 getallen, en een van onze functies

function showCalculation(a , b, callback) {
    console.log(callback(a , b))
}








showCalculation(1, 1, sum)
showCalculation(1 , 1, multiply)
showCalculation(10, 2, division)
const name = "Yme"
const multiplier = function() {}

function selectRandomStudent(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}



const age = 21
const students = ['Yme', 'Arne', 'Mert']

// console.log(sum(age, 12))
// console.log(selectRandomStudent(students))

function showMessage(message) {
    console.log("Answer Checker Message", message)
}


function checkAnswer(answer, solution, callback) {
    if (answer === solution) {

        callback('🫰')
        return true
    }
    
    callback('❌')
    return false
    
}

checkAnswer('ja', 'ja', showMessage)