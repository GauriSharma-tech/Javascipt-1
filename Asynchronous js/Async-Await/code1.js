// Async-Await

//we can change a function to an async function by adding the async keyword 'async' before the function keyword

//async function returns a promise

const hello = async () => {
  console.log("Hello, World!");
};

//Next we have Await keyword, which is used to wait for a promise to resolve or reject.
//it pauses the execution of the async function until the promise is settled (resolved or rejected).

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("API data fetched");
      resolve("200");
    }, 2000);
  });
}

//await api(); //this will throw an error because await can only be used inside an async function

async function getweatherdata() {
  await api(); //this will work because we are using await inside an async function;
  await api(); //this second call will wait for the first call to complete before executing
}
getweatherdata();
