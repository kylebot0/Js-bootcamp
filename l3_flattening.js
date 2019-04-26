let combineArray = (arrays) => {
    return arrays.reduce((x, y) => x.concat(y), []);
}

console.log(combineArray([
    [1, 2, 3],
    [4, 5],
    [6]
]));