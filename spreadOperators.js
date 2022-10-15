// ... Spread Operators
function add(...nums){
    let total = nums.reduce(function(x,y){
        return x+y;
    });
    console.log(total);
}

// add(1, 2, 3, 4, 25);
// console.log(`Testing Spread Operator: SUM Result: ${sumation}`);

// Same thing using Arrow Function
const addWithArrowFunc = function (...nums){
    let total = nums.reduce((x,y) => {
        return x+y;
    });
    console.log(total);
}

console.log(`Added with Arrow Function:`);
addWithArrowFunc(10, 20, 11, 19)
// const addwitharrowfunc = addWithArrowFunc(10, 10, 15, 20);
// console.log(addwitharrowfunc)

// Another Example of Spread OPS (3 dots)
nums = [1, 2, 3, 4, 5]
spreadOps = [...nums]

console.log(spreadOps)

spreadOps.push(100, true)
console.log(spreadOps)

// Rest OPS 
//--------------
console.log('Rest Operator')
//Rest Operator essentially uses the spread OPS
//arguments operator potentially depricated by rest operator - 
// thesefore uses rest operator
function argumentsOps (nums) {
    console.log(arguments)
}
console.log("Using Arguments: ");
argumentsOps(1, 2, 3, 4, 5);

//Rest OPS uses Spread Operators
function restOps (...nums) {
    console.log(nums) //nums here is a rest operator
}
console.log("Using Rest");
restOps(1, 2, 3, 4);