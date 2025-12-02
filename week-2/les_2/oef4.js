const numbers = [1, 2, 3, 4, 5]

for (const number of numbers) {
    console.log(number)
}

var hello = "Hello"

for (const char of hello) {
    console.log(char)
}

const colors = ['red', 'blue', 'green', 'yellow']


colors.forEach(index => {
  console.log(index, colors.indexOf(index))
});