//DOM- Document object model
//DOM is a programming interface for web documents
//It represents the page so that programs can change the document structure, style and content
//----------------------------------------------------
//1) SELECTORS
//SELECTING ELEMENTS USING DOM

//Single element selector
console.log(document.getElementById('my-form'));

//querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1')); //selects first h1 element
console.log(document.querySelector('h1')); //selects h1 element with id main-heading

//Multiple element selector

console.log(document.querySelectorAll('.item')); //returns a NodeList of all elements that match the specified selector

console.log(document.getElementsByClassName('item')); //returns a live HTMLCollection of elements with the specified class name
console.log(document.getElementsByTagName('li')); //returns a live HTMLCollection of elements with the specified tag name


const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item)); //iterating through NodeList using forEach method
items.forEach((item) => console.log(item.textContent)); //iterating through NodeList using forEach method and logging text content of each item
//--------------------------------------------------------

const ul = document.querySelector('.items'); //selecting ul element with class items
//ul.remove();
//ul.lastElementChild.remove(); //removing the last child of ul element`


//Manipulating the DOM

ul.firstElementChild.textContent = 'Hello'; //changing the text content of the first child of ul element
//this will not work if we use ul.firstChild.textContent = 'Hello'; because firstChild will select the text node as well and not the first child element
ul.children[1].innerText = 'Brad'; //changing the text content of the second child of ul element
//ul.firstChild.textContent = 'Hello'; //changing the text content of the first child of ul element,this will add a text node instead of changing the text content of the first child element

ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; //changing the inner HTML of the last child of ul element

//changing styles

document.querySelector('.btn').style.background = 'red'; //changing the background color of the button with class btn

document.querySelector('.btn').style.color = 'white'; //changing the text color of the button with class btn














