function zijnObjectenIdentiek(obj1, obj2) {

  if (obj1.length !== obj2.length) {
    return false;
  }

  return true;
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(zijnObjectenIdentiek(objectA, objectB)); // true
