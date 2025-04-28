//functions

// function addNums(a, b) {
//     console.log(a + b);
// }

// addNums(5, 10);
// addNums(20, 30);

// addNums(); //undefined + undefined = NaN 
// addNums(5); //5 + undefined = NaN
// addNums(5, 10, 15); //5 + 10 = 15 (ignores 15)

//default arguments

// function addNums(a = 70, b = 0) {
//     console.log(a + b);
// }

// addNums(); //70 + 0 = 70
// addNums(5); //5 + 0 = 5
// addNums(5, 10); //5 + 10 = 15

//returning values

// function addNums(a, b) {
//     return a + b;
// }
// console.log(addNums(100, 10)); //110


//another way to write functions' syntax is using arrow functions

// const multiply = (a, b) => {
//     return a * b;
// }
// console.log(multiply(5, 10)); //50

//you don't need to use return if you have only one line of code in the function
// const multiply1 = (a, b) => a * b;
// console.log(multiply1(36, 10)); //50

const multiply2 = (a = 10, b = 36) => a * b;
console.log(multiply2()); //360 (10 * 36)

//we can use function with for each loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers1 = numbers.forEach((number) => {
    console.log(number * 2); //2, 4, 6, 8, 10, 12, 14, 16, 18, 20
});