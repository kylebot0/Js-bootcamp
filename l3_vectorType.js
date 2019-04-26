class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(vector){
        return new Vec(this.x + vector.x, this.y + vector.y);
    }
    minus(vector){
        return new Vec(this.x - vector.x, this.y - vector.y);
    }
    get length(){
        let x = this.x * this.x;
        let y = this.y * this.y;
        // √(2*2)+(3*3)
        return Math.sqrt(x, y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
