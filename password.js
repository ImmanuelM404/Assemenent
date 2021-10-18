let users = ['Mary', 'Snow', 'Joe']
let welcome = "Welcome to PasswordValidator,"
console.log(welcome, users[0])

const readline = require('readline');

const readerPassword = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



readerPassword.question("Validate your password" , function(input){
	password = input.split(' ');
	
	passwordValidator = password[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
   
   if (password.length <= 10 ){
       console.log("Successul Password Update")
   } else (password.length > 10)
       (console.log("Failed Password Attempt"))
   
   
   

    readerPassword.close()
});



