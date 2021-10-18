// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Analysis of Requirements
// Design
// Implementation
// Maintain
// Planning
// Testing & Integration

let SDL = ['Planning', 'Analysis of Requirements','Design', 'Implementation', 'Testing & Integration', 'Maintain']
for (let i = 0; i < SDL.length; i++){
    console.log(SDL[i])
}



//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
*/
let Planning = 'Decide on system and software requirements '
let AnalysisOfRequirements = 'Business rules and data models'
let Design = 'Design the software (UI/UX) '
let Implementation = 'Actual installation of the crafted solution takes place'
let TestingIntegration = 'QA engineers conduct test to ensure code is clean and business goals of solution is met'
let Maintain = 'After deployed, maintenance and regular updates. Figutre out maintenance, support and installation.'
console.log("--------")
console.log(Planning)