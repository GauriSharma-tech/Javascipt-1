// Asynchronous JavaScript is a programming paradigm that allows for non-blocking operations.
// It enables the execution of code without waiting for previous operations to complete, which is particularly useful for tasks like network requests, file I/O, and timers.
// This is achieved through mechanisms like callbacks, promises, and async/await syntax.

//---------------------------------------------------------------------------------------------------
//CALLBACKS: callbacks are functions passed as arguments to other functions, allowing for asynchronous execution.
// They are often used in event handling, timers, and network requests.

// const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
// document.getElementById("demo").innerHTML = posNumbers;
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }

function sum(a, b) {
  console.log(a + b);
}
function calculate(a, b, callback) {
  callback(a, b);
}
calculate(5, 10, sum); // 15
