let string = '';

for (let number = 1; number <= 100; number += 1){
    if(number % 3 == 0 && number % 5 == 0){
        string += 'Fizz Buzz ' + number;
        string += '\n';
    } else if(number % 3 == 0){
        string += 'Fizz ' + number;
        string += '\n';
    } else if (number % 5 == 0){
        string += 'Buzz ' + number;
        string += '\n';
    } 
}

console.log(string);