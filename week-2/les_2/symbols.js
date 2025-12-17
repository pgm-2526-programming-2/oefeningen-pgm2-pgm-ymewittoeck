const student = Symbol("yme")
const person = "yme"

console.log(student,student.description ,student === person)

// uppercase variables - waarden die nooit zullen veranderen en je gebruikt die in heel je project
const STATES = {
    LOADING: Symbol("Laden"),
    LOADED : Symbol("Laden")
}