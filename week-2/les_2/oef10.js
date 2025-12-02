function filterEvenGetallen(getallen) {
  return getallen.filter(getal => getal % 2 === 0)
}

let willekeurigeGetallen = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(willekeurigeGetallen);
console.log(evenGetallen); // geeft [8, 6, 10]