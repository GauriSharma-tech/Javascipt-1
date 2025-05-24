// callback hell is a situation where you have multiple nested callbacks, making the code hard to read and maintain.
// This is an example of callback hell

// function getData(dataId) {
//   setTimeout(() => {
//     console.log("data", dataId);
//   }, 2000);
//}
//in this example we have a function getData that takes a dataId and after 2 seconds it logs the dataId to the console.
// if we want to get data for 3 different dataIds, we have to call the function 3 times and wait for each one to finish before calling the next one.
//this settimeout is simulating an asynchronous operation like fetching data from an API.
// this is a simple example of callback hell, where we have to wait for each callback to finish before calling the next one.
// getData(1); //2s
// getData(2); //2s
// getData(3); //2s

//this type of code is hard to read and maintain, and it can lead to "callback hell" where you have multiple nested callbacks.

//following is an example of callback hell:
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      console.log("all data fetched");
    });
  });
});

//callback hell also called "pyramid of doom"

//to solve this problem, we can use promises.
