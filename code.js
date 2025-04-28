//alert("hello world");

// console.log("hello world");
// console.error("This is an error");
console.assert(1 === 2, "This is an assertion error");


/*****************
You can take user inputs in javascript using prompt() function
prompt() function takes a string as an argument and returns the value entered by the user as a string.

let a= prompt("Enter a number: ");
a=Number(a); //convert string to number
console.log(a);


/******************/
//variables

//var,let,const
//var is globally scoped, let is block scoped, const is block scoped and cannot be reassigned

//let can be reassigned, but not redeclared
//const cannot be reassigned or redeclared

let age = 30;
age = 31;
//let age = 50; // This will throw an error because age is already declared with let

console.log(age); // 30

