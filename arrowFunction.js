const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: false},
    {id:3, isActive: true}
];

const activeJobs = jobs.filter(function(job){return job.isActive});
console.log(activeJobs)

// using arrow function
const actvJobs = jobs.filter(job => job.isActive)
console.log(actvJobs)