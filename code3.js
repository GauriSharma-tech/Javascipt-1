//object literals : key value pairs
//objects are mutable and dynamic
//objects are reference types

//constructing an object using object literal syntax
const person = {
    firstName: "John",
    lastName: 'Doe',
    age: 30,
    isStudent: false,
    address: {
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['reading', 'traveling', 'sports'],

}

console.log(person);
// { firstName: 'John', lastName: 'Doe', age: 30, isStudent: false, address: { city: 'New York', state: 'NY' }, hobbies: [ 'reading', 'traveling', 'sports' ] }

console.log(person.firstName); // John
console.log(person['lastName']); // Doe
console.log(person.hobbies[1]); // traveling
console.log(person.address.city); // New York

//deconstructuring an object

const { firstname, lastname, age, address: { city } ,hobbies} = person
console.log(firstname); // John
console.log(city); // New York
console.log(hobbies); // [ 'reading', 'traveling', 'sports' ]
console.log(hobbies[0]); // reading

//adding properties

person.email = 'gauri@gmail.com';
console.log(person.email) 




