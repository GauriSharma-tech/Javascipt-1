//understanding AJAX , JSON, json() method:

//AJAX (Asynchronous JavaScript and XML) is a technique for creating asynchronous web applications.
//data format used to be in xml but now it is mostly in JSON (JavaScript Object Notation) format.

//JSON format is a lightweight data interchange format that is easy to read and write for humans and machines.
//JSON is javascript object notation, which means it is a way to represent javascript objects in a string format.
//nowadays most APIS return data in JSON format.
//Also known as AJAJ //(Asynchronous JavaScript and JSON).

//json() method is used to parse the response data from the server.
// It converts the response data into a JavaScript object.

const URL = "https://catfact.ninja/facts";
const facts = document.getElementById("fact");

const btn = document.getElementById("btn");

const getFacts = async () => {
  console.log("getting facts from the URL...");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json(); //we did await because response.json() returns a promise
  console.log(data);
  console.log(data.data);
  console.log(data.data[0].fact);
  facts.innerHTML = " <h2>Cat Facts</h2><ul>"; //clearing the previous facts and adding a heading
  for (let i = 0; i < data.data.length; i++) {
    facts.innerHTML += `<li>${data.data[i].fact}</li>`;
  }
};

btn.addEventListener("click", getFacts); //adding an event listener to the button to call getFacts function when clicked
