// De moeilijke maar herbruikbare manier
let f = (min, max) => {
    if (min < max) {
        return min;
    } else {
        return max;
    }
}
console.log(f(10, 20));

// Maar het kan ook heel makkelijk

console.log(Math.min(10,20));