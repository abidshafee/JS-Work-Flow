function Circle(radius){
    this.radius = radius;

    // So, If we want to hide a property
    // instead to delaring as this.propertyName -
    // we should declare it using let keyword
    let hdnProp = {
        x: 1,
        y: 2
    }

    // Here hdnProp is a Private Property
    // Creating method to set value for the private property
    this.setValueForHdnProp = Function () {
        //pass
    };
}