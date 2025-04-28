//ARRAYS -variables taht hold multiple values

//various methods to create an array: 
const numbers = new Array(1, 2, 3, 4, 5); // here new is constructor and array is a class

const fruits = ['apple', 'banana', 'orange']; //array literal
const mixed = ['apple', 1, true, null]; //mixed array
const empty = []; //empty array
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

console.log(fruits); // [ 'apple', 'banana', 'orange' ]

//access array elements

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(mixed[2]); // true
console.log(mixed[3]); // null
console.log(empty[0]); // undefined

//adding elements to an array

fruits[3] = 'grape'; //adding element at index 3
fruits.push('mango'); //adding element at the end of the array

console.unshift('kiwi'); //adding element at the beginning of the array

fruits.pop()

//to check whether an object is an array or not, we can use the Array.isArray() method
//this method returns true if the object is an array and false otherwise    
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(Strings)); // false

//to get the length of an array, we can use the length property
console.log(fruits.length); // 5

//to get the index of an element in an array, we can use the indexOf() method
console.log(fruits.indexOf('banana')); // 1

console.log(fruits); // [ 'kiwi', 'apple', 'banana', 'orange', 'grape' ]



