//Array of objects

const students = [
    {
        name: 'John',
        age: 20,
        grade: 'A'
    },
    {
        name: 'Jane',
        age: 22,
        grade: 'B'
    },
    {
        name: 'Jim',
        age: 21,
        grade: 'C'
    }
];

console.log(students);

console.log(students[1].age); //22
console.log(students[0].grade); //A
console.log(students[2].name); //Jim
//---------------------------

//spread operator
//The spread operator is used to expand an iterable (like an array) into more elements.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = Math.max(...numbers); // 10
console.log(max); // 10

let min = Math.min(...numbers); // 1
console.log(min); // 1

let max2 = Math.max(numbers);
//this will not work because Math.max() only takes numbers as arguments, not an array
//that's why we use the spread operator to expand the array into numbers
console.log(max2); // NaN
//----------------------------------------------
//rest operator
//The rest operator is used to collect all remaining elements into an array.

function openfridge(...foods) {
    console.log(...foods);
}

const food1 = 'cake';
const food2 = 'pizza';
const food3 = 'soda';
const food4 = 'ice cream';
const food5 = 'fruit';  

openfridge(food1, food2, food3, food4, food5); // cake pizza soda ice cream fruit
//The rest operator collects all the arguments into an array called args


//--------------------------------------------
//To JSON

const todoJSON = JSON.stringify(students);
console.log(todoJSON); // [{"name":"John","age":20,"grade":"A"},{"name":"Jane","age":22,"grade":"B"},{"name":"Jim","age":21,"grade":"C"}]
console.log(typeof todoJSON); //string because JSON.stringify converts the object to a string
//JSON.stringify converts the object to a string
//JSON.parse converts the string back to an object
const todoObj = JSON.parse(todoJSON);
console.log(todoObj); // [ { name: 'John', age: 20, grade: 'A' }, { name: 'Jane', age: 22, grade: 'B' }, { name: 'Jim', age: 21, grade: 'C' } ]


