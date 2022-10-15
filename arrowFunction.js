// Conventional Function Declaration
const square = function(number) {
    return number*number
}
console.log(`Conventional Function: ${square(7)}`)

//Declaring the square function -
//using arrow function 
// Just Remove the 'function' Keyword - 
//Place arrow sign between function parameter and body
const square2 = (number) => {
    return number*number
}
console.log(`Using Arrow Function: ${square2(9)}`)

// implementation of Arrow Function
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: false},
    {id: 3, isActive: true}
];

const activeJobs = jobs.filter(function(job){return job.isActive});
console.log(activeJobs)

// using arrow function
const actvJobs = jobs.filter(job => job.isActive)
console.log(actvJobs)