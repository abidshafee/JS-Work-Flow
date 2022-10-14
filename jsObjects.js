function Circle(radius){
    let hidn = 'An unaccesible variable'
    this.radius = radius;
    this.area = function(rad = this.radius){
        const pi = 3.1416;
        return pi*rad*rad;
    }
}

const circle = new Circle(7);
console.log(`Area: ${circle.area()} sq.m.`)

for(let key in circle){
    console.log(key, circle[key]);
}

//hidn is unccesible from the circle object
console.log(circle.hidn);