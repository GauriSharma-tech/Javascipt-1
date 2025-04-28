//datatypes

//string,numbers,boolean,undefined,null,symbol

// const name='sachin'; //string
// const age = 23; //number
// const isStudent = true; //boolean
// const address = null; //null
// let phone; //undefined
// const uniqueId = Symbol('id'); //symbol

// console.log(typeof name); //string
// console.log(typeof age); //number
// console.log(typeof isStudent); //boolean
// console.log(typeof address); //object
// console.log(typeof phone); //undefined
// console.log(typeof uniqueId); //symbol

//CONCATENATION OF STRINGS
// console.log('MY NAME IS ' + name + ' AND I AM ' + age + ' YEARS OLD'); //MY NAME IS sachin AND I AM 23 YEARS OLD
// console.log(`MY NAME IS ${name} and I AM ${age}years old`);
//MY NAME IS sachin and I AM 23years old
//---------------------------------------------------------------------
//string properties and methods

const s = 'hello world';
const s1='technology, computer, it, code'
// console.log(s.length); //11
//console.log(s.toUpperCase()); //HELLO WORLD
// console.log(s.toLowerCase()); //hello world
// console.log(s.charAt(0)); //h
// console.log(s.indexOf('o')); //4 , returns the first index of the character o
// console.log(s.lastIndexOf('o')); //7 returns the last index of the character o
// console.log(s.substring(0, 5)); // this will return the substring from index 0 to 5 exclusive
// console.log(s.slice(0, 5)); // this will return the substring from index 0 to 5 inclusive

console.log(s.split(' ')); //this will split the string into an array of strings using the space as a separator
//o/p-[ 'hello', 'world' ]

console.log(s1.split(',')); //this will split the string into an array of strings using the comma as a separator
//o/p-[ 'technology', ' computer', ' it', ' code' ]

console.log(s.replace('world', 'everyone')); //this will replace the first occurrence of the string world with everyone
//o/p-hello everyone




