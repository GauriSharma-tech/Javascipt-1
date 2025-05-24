// Promises is for "eventual completion" of an async operation
//it is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// syntax is:
// let promise=new Promise((resolve, reject) => {})

// let promise = new Promise((resolve, reject) => {
//   console.log("Promise is created");
//   //resolve("Promise is resolved"); // resolve is a function that is called when the promise is fulfilled , it's internally automatically called
//   reject("some error occured"); // reject is a function that is called when the promise is rejected
// });

//promise is an object in java that has 3 state: pending, fulfilled, rejected
// pending: initial state, neither fulfilled nor rejected
// fulfilled: meaning that the operation was completed successfully
// rejected: meaning that the operation failed

//reject and resolve are callback provided by the promise constructor javascript engine

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (dataId > 0) {
//         console.log(`Data ${dataId} is fetched`);
//         resolve(`SUCCESS: Data ${dataId}`);
//       } else {
//         reject("Error: Invalid data ID");
//       }
//     }, 5000);
//   });
// }

//use of promise is to handle async operations such as fetching data from server which takes time , hence we use promise to handle the async operation

//USE OF .then() and .catch()

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise is created");
    resolve("Success!!");
    reject("Error!!");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("resolved", res); //this res is the value passed in the resolve function
});

//if error occurs in the promise, then catch block will be executed
promise.catch((err) => {
  console.log("rejected", err); //this err is the error message passed in the reject function
});
