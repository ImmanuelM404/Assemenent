let users = ['Mary', 'Snow', 'Joe']
let welcome = "Welcome to PasswordValidator,"
console.log(welcome, users[0])

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Validate your password" , function(password){
	//password = input.split(' ');
   if (password.length >= 10 ){
       console.log("Successul Password Update")
   } else {
       (console.log("Failed Password Attempt: Too Short"))
   }
   
   
   

    //readerPassword.close()
});



