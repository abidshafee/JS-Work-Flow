function Circle(radius){
    this.radius = radius;

    //Abstruction
    //hiding the sqr function implenntation from its instance
    let sqr = function(x){
        return x*x;
    }
    this.area = function(rad = this.radius){
        const pi = 3.1416;
        return pi*sqr(rad);
    }
}

const circle = new Circle(3);
console.log(`Area of a circle of radius 3: ${circle.area()} sq.m.`)
