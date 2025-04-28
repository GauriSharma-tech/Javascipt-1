//OOPS IN ES 5- pre classes

//constructor function : functios that create objects
//Naming convention: constructor functions should start with a capital letter

//constructor function
// function Person(firstname, lastname, dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//     //adding methods to the object
//     this.getBirthYear = function () {
//         return this.dob.getFullYear(); //get the year from the date object
//     }
//     this.getfullname = function () {
//         return `${this.firstname} ${this.lastname}`; //return the full name of the person
//     }

// }

//here new Date(dob) is used to convert the dob string into a date object
//this keyword refers to the object that is being created by the constructor function

//instatiate an object: create an instance of the object means create an object from the constructor function

// const person1 = new Person('John', 'Doe', '01-01-1990');
// const person2 = new Person('Jane', 'Doe', '02-02-1992');
// const person3 = new Person('Jim', 'Doe', '03-03-1993');

//here 'new' keyword is used to create an instance of the object
//the 'new' keyword creates a new object and assigns it to the variable person1, person2, person3
//the 'new' keyword also calls the constructor function and passes the arguments to it

// console.log(person2.dob); 
// console.log(person2.dob.getFullYear()); //get the year from the date object
// console.log(person2.dob.getMonth()); //get the month from the date object
// console.log(person2.dob.getDate()); //get the date from the date object
// console.log(person2.dob.getHours()); //get the hours from the date object ,i.e, 0-23

// console.log(person3.getBirthYear()); //get the year from the date object
// console.log(person3.getfullname()); //get the full name of the person

// console.log(person1)
//this will return {firstname: 'John', lastname: 'Doe', dob: 1990-01-01T00:00:00.000Z, getBirthYear: [Function], getfullname: [Function]}

//this is a prototype of the object , prototype is a property of the object that is used to add methods to the object

//we can add methods to the object using prototype

function Person(firstname, lastname, dob) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.dob = new Date(dob);

}

Person.prototype.getFullName = function () {
    return `${this.firstname} ${this.lastname}`; //return the full name of the person
}

Person.prototype.getBirthYear = function () {
   return this.dob.getFullYear(); //get the year from the date object
};


const person1 = new Person('John', 'Doe', '01-01-1990');
const person2 = new Person('Jane', 'Doe', '02-02-1992');
const person3 = new Person('Jim', 'Doe', '03-03-1993');
 
console.log(person1)

