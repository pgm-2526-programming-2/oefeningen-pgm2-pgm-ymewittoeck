add(1, 5, 6); // 3
add(1, 5, 6, 5, 1561, 2, 5); // 7

function add(...rest) {
    return rest.length
}

console.log(add(3 ,5 ,8 ,7 , 5 ))