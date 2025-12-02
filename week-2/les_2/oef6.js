const willekeurigeGetallen = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91]

const filterWoorden = willekeurigeGetallen.filter((getal) => getal > 10)

const langerDanTwintig = willekeurigeGetallen.every((getal) => getal > 20)

const zin = willekeurigeGetallen.join(' ')

const reduced = willekeurigeGetallen.reduce((prev, next) => prev + next, 0)

const verdubbeld = willekeurigeGetallen.map((getal) => getal * 2)

const groterDanDertig = willekeurigeGetallen.some((getal) => getal > 30)

willekeurigeGetallen.pop()
willekeurigeGetallen.shift()
willekeurigeGetallen.push(5)

console.log(filterWoorden)
console.log(langerDanTwintig)
console.log(zin)
console.log(reduced)
console.log(verdubbeld)
console.log(groterDanDertig)