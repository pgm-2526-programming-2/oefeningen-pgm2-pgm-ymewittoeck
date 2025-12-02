const willekeurigeNamenArray = [
  ['Alice', 'Bob', 'Charlie'],
  ['David', 'Eva', 'Frank'],
  ['Grace', 'Hank', 'Ivy'],
  ['Jack', 'Kelly', 'Liam']
];

console.log(willekeurigeNamenArray)

const platteArray = willekeurigeNamenArray.flat()

willekeurigeNamenArray.forEach(subarray => subarray.shift())

willekeurigeNamenArray.pop()

console.log(platteArray)
console.log(willekeurigeNamenArray)