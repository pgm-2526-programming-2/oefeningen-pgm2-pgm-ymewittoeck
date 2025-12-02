const woorden = [
  'mal',
  'snurkduif',
  'bromvlieg',
  'snottebel',
  'knotsgek',
  'pindakaas',
  'fluitketel',
  'smurfenmuts',
];

woorden.unshift("hello")

const connect = woorden.join("-")

const begintMetB = woorden.some((woord) => woord.startsWith("b"))

const langerDanTwee = woorden.every((woord) => woord.length > 2)

const derdeElement = woorden[2];

const filterWoorden = woorden.filter((woord) => woord.length > 6)


console.log(connect)
console.log( begintMetB)
console.log(langerDanTwee)
console.log(woorden.sort())
console.log(derdeElement)
console.log(filterWoorden)