// //conditionals

// const x = 10; 
// if (x % 2 == 0) {
//     console.log("x is even"); 
// }

// else if(x % 2 != 0) {
//     console.log("x is odd"); 
// }
// else {
//     console.log("x is neither even nor odd"); 
// }

//ternary operator

const x = 10;

const colour = (x > 10) ? 'red' : 'blue';
console.log(colour); // blue

//switch statement

//we can take user input and check the value of the input using switch statement
let a = Number(prompt("Enter a number: "));

switch (a) {
    case 1:
        console.log("You entered one.");
        break;
    case 2:
        console.log("You entered two.");
        break;
    case 3:
        console.log("You entered three.");
        break;
    default:
        console.log("You entered a number other than one, two, or three.");
        break;
}

