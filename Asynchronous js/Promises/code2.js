//PROMISE CHAINING

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async function 1 executed");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async function 1 executed");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("Before async function 1");
// let promise = asyncFunc1();
// promise.then((res) => {
//   console.log(res);
// });
// console.log("Before async function 2");
// let promise2 = asyncFunc1();
// promise2.then((res) => {
//   console.log(res);
// });

//this lead to both functions fetching data at the same time

// in order to fetch data one after another, we can use promise chaining
// this is done by returning the promise from the then block
// this is called promise chaining

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async function 1 executed");
      resolve("success of function 1");
    }, 4000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async function 1 executed");
      resolve("success of function 2");
    }, 6000);
  });
}
console.log("Before async function 1");
// let promise = asyncFunc1();
// promise.then((res) => {
//   console.log(res);
//   console.log("Before async function 2");
//   let promise2 = asyncFunc2();
//   promise2.then((res) => {
//     console.log(res);
//   });
// });

///OR

asyncFunc1().then((res) => {
  console.log(res);
  console.log("Before async function 2");
  asyncFunc2().then((res) => {
    console.log(res);
  });
});

//promise chaining is can also be remembered as nesting of promises
