function Circle(radius){
    this.radius = radius;

    //Abstruction
    //hiding the sqr function implenntation from the Circle instance
    let sqr = function(x){
        return x*x;
    };
    // So, If we want to hide a property
    // instead to delaring as this.propertyName -
    // we should declare it using let keyword
    // Private Property - Object Literal Defination
    let hdnProp = {
        x: 1,
        y: 2
    }

    //this.pprop = hdnProp.key;

    // Using the Abstruct sqr function
    this.area = function(rad = this.radius){
        const pi = 3.1416;
        return `${pi*sqr(rad)} | Hidden property: ${console.log(hdnProp.x)}`;
    }
}

const circle = new Circle(3);
console.log(`Area of a circle of radius 3 is: ${circle.area()} sq.m.`)
// console.log(circle.hdnProp.x); // hdnprop is a private property; therefore, can not be accesible