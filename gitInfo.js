/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "A program that allows you to track chanegs of code"
console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "Allows you to track your git respositories and downloads"
console.log(gitHubDefinition)

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let gitInitDesription = "initalize local repo right here in this folder"
let gitInitCode = "git init"
console.log(gitInitDesription, gitInitCode)
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let gitCloneDesription = "target an exisiting repo and create clone"
let gitCloneCode = "git clone"
console.log(gitCloneDesription, gitCloneCode)
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let gitStatusDesription = "tell me about this repo"
let gitStatusCode = "git status"
console.log(gitStatusDesription, gitStatusCode)
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let gitAddDesription = "add some files to be tracked"
let gitAddCode = "git add"
console.log(gitAddDesription, gitAddCode)
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let gitCommitDesription = "create a snapshot of the files I'm tracking"
let gitCommitCode = "git commit -m "
console.log(gitCommitDesription, gitCommitCode)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let gitPushDesription = "uplaod local repo content to a remote repo"
let gitPushCode = "git push"
console.log(gitPushDesription, gitPushCode)