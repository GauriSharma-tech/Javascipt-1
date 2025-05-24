//Using Async-Await for getData example

function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", id, " fetched");
      resolve();
    }, 2000);
  });
}

// async function getAllData() {
//   console.log("Fetching data1...");
//   await getData(1);
//   console.log("Fetching data2...");
//   await getData(2);
//   console.log("Fetching data3...");
//   await getData(3);
//   console.log("success all data");
//   return "All data fetched";
// }
// getAllData().then((result) => {
//   console.log("Returned value:", result);
// });

//IIFE: Immediately Invoked Function Expression
//It is a function that executes as soon as it is defined

(async function () {
  console.log("IIFE: Fetching data1...");
  await getData(1);
  console.log("IIFE: Fetching data2...");
  await getData(2);
  console.log("IIFE: Fetching data3...");
  await getData(3);
  console.log("IIFE: success all data");
  return "All data fetched";
})().then((result) => {
  console.log("IIFE: Returned value:", result);
  console.log("IIFE: End of program");
});
