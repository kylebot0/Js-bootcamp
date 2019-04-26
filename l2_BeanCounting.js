// Voor de opdracht met hun eigen console logs
let countBs = (string) => {
   return countChar(string, 'B')
}

let countChar = (string, char) => {
    let count = 0;
    for (let i = 0; i <= string.length; i++) {
        if(string[i] == char) {
            count += 1;
        }
    }
    return count;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
