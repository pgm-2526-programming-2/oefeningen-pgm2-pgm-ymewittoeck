// addOnlyNumbers(1, 5, 6, "cat", "dog", 3); // Er waren 6 argumenten, de som van de getallen is 15.


function addOnlyNumbers(...rest) {
    
     const som = parseInt(rest.reduce((prev, curr) => prev + curr, 0));
02
    return `Er waren ${rest.length} argumenten, de som van de getallen is ${som}`
}  

console.log(addOnlyNumbers(1, 5, 6, "cat", "dog", 3))
