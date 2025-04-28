//OOPS IN ES 6- WITH CLASSES
//classes are a template for creating objects
//classes are a special type of function
//classes are a blueprint for creating objects
//classes are a way to create objects in a more elegant way than constructor functions

//Naming convention: classes should start with a capital letter
class Person{
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }
    //adding methods to the object instead of adding methods to the prototype of the object
    //this is a better way to add methods to the object
    getBirthYear() {
        return this.dob.getFullYear(); //get the year from the date object
    }
    getfullname() {
        return `${this.firstname} ${this.lastname}`; //return the full name of the person
    }
}

//instantiate an object: create an instance of the object means create an object from the class

const person1 = new Person('John', 'Doe', '01-01-1990');
const person2 = new Person('Jane', 'Doe', '02-02-1992');
const person3 = new Person('Jim', 'Doe', '03-03-1993');

console.log(person1); //this will return the prototype of the Person class
console.log(person3.getFullName())