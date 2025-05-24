//showing promise on getdata() function to show how it's better than callback hell

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dataId > 0) {
        console.log(`Data ${dataId} is fetched`);
        resolve(`SUCCESS :)`);
      } else {
        reject("Error: Invalid data ID");
      }
    }, 5000);
  });
}

// let p1 = getData(1);
// p1.then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// });

//there is simpler way to do this using promise chaining instead of nesting .then just using 'return' keyword

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

//this can be little bit complicated if we have to fetch data from multiple sources,
// so we can use async/await to make it more readable
