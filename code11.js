//event listener : it is used to listen to the event
//event : it is a action that occurs as a result of user interaction with the browser window
//event handler : it is a code that executes when the event occurs
//event target : it is the element that triggered the event
//event object : it is a object that contains information about the event that occurred

const butn = document.querySelector(".btn");

//hover ->mouseover
//mouseout -> when the mouse leaves the element
//click -> click
//dblclick -> double click
//keydown -> when a key is pressed down

butn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    console.log(e); 
    //this will give us the event object
    console.log(e.target);
    //this will give us the element that triggered the event
    console.log(e.target.className);
    //this will give us the class name of the element that triggered the event
    console.log(e.target.classList);

    //to change

    document.querySelector("#my-form ").style.backgroundColor = "yellow";
    //this will change the background color of the form to yellow when the button is clicked

    //document.querySelector("body").classList.add('bg-dark');
    //classList is used to add a css class to the element
    //bg-dark is a css class that is defined in the css file
    //this will add the class bg-dark to the body when the button is clicked

    document.querySelector('.items').lastElementChild.innerHTML = "<h1>bello</h1>";
    

})


