//LOOPS and higher order arrays methods


const students = [
  {
    name: "John",
    age: 20,
    grade: "A",
  },
  {
    name: "Jane",
    age: 22,
    grade: "B",
  },
  {
    name: "Jim",
    age: 21,
    grade: "C",
  },
];
//for loop 
// for (let i = 0; i < students.length; i++){
//   console.log(students[i]); //{ name: 'John', age: 20, grade: 'A' } { name: 'Jane', age: 22, grade: 'B' } { name: 'Jim', age: 21, grade: 'C' }
  
// }

// //while loop

// let i = 0;
// while (i < 10) {
//   console.log(i); //0 1 2 3 4 5 6 7 8 9
//   i++;
// }

//do while loop
// let j = 0;
// do {
//   console.log(j); //0 1 2 3 4 5 6 7 8 9
//   j++;
// } while (j < 10);

//other way of 'for' loop

// for (let student of students) {
//   console.log(student);
//   console.log(student.grade); //A B C
// }
//----------------------------
//high order array methods
//forEach,map,filter,reduce

//forEach

students.forEach(function (student) {
  console.log(student.name); //John Jane Jim
  console.log(student.age); //20 22 21
});


//map
//this will return a new array with the names of the students
//it will not modify the original array

const studentNames = students.map(function (student) {
  return student.name; //John Jane Jim
});

console.log(studentNames); //['John', 'Jane', 'Jim']
//o/p -> ['John', 'Jane', 'Jim']

//filter
//this will filter the students whose age is greater than 20
//and return a new array with those students details
//it will not modify the original array and will return empty array if no students are found

const filteredStudents = students.filter(function (student) {
  return student.age > 20; //Jane Jim
});
console.log(filteredStudents);
// [ { name: 'Jane', age: 22, grade: 'B' }, { name: 'Jim', age: 21, grade: 'C' } ]


//reduce

//this will reduce the array to a single value
//and return the sum of the ages of all students
//it will not modify the original array and will return 0 if no students are found
//the reduce function takes two parameters, the accumulator and the current value

//the accumulator is the value that is returned after each iteration
//the current value is the value of the current iteration
 
//example of reduce function

const sumOfAges = students.reduce(function (accumulator, student) {
  return accumulator + student.age; //20 22 21
}, 0); //0 is the initial value of the accumulator
console.log(sumOfAges); //63


//combining map and filter

const filteredStudentNames = students.filter(function (student) {
  return student.age > 20; //Jane Jim 
}).map(function (student) {
  return student.name; //Jane Jim
});

console.log(filteredStudentNames); //['Jane', 'Jim']









