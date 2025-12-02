function somArrays(nrOne, nrTwo) {
  return nrOne.map((getal, i) => getal + nrTwo[i])
}

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const result = somArrays(array1, array2)

console.log(result)