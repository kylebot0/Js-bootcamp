let size = 8, hash2 = '';

for(let height = 0; height <= size; height++){
    for (let width = 0; width <= size; width++) {
        if((width + height) % 2 == 0){
            hash2 += ' ';
        } else {
            hash2 += '#';
        }
    }
    hash2 += '\n';
}

console.log(hash2);