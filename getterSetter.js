const person = {
    firstName: 'Shafekul',
    lastName: 'Abid',
    fullName() {
        return `${person.firstName} ${person.lastName}`;
    }
}

console.log(person.fullName())

//getter => to access property of an object
//setter => to change property value if needed
const personGetSet = {
    firstName: 'Shafekul',
    lastName: 'Abid',
    // For Getter just use the get keyword before the function
    get fullName() {
        return `${personGetSet.firstName} ${personGetSet.lastName}`;
    },
    //Adding the setter to change to property firstName and lastName from the outside
    set fullName(value) { // the set accessor must have atleast 1 parameter
        //let new value is assigned 'Abid Shafee'
        // So we'll split them to assign seperately to firstName and lastName property
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
//Set new value to personGetSet
personGetSet.fullName = 'Abid Shafee';

//the get keyword allows us to access the function fullName like a property
console.log(personGetSet.fullName)