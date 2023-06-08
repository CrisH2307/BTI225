// /* // Week 4
// // User-difined objs
// // Built in obj: string, array

// var str = "Hello";

// console.log(str.length); // length is the property of the built-in obj string
// console.log(str.toUpperCase()); // toUpperCase() is the function of the built-in obj string

// //(1) create an obj 
// var person1 = {
//     name: "Cris",
//     age: 17,
//     height: 5.11,
//     email: "sadadsad@gmail.com",
//     display: function()
//     {
//         var txt = `Name: ${this.name}, Age: ${this.age}, Height ${this.height}, Email ${this.email}`;
//         return txt;
//     }
// }

// var person2 = {
//     name: "Sean",
//     age: 22,
//     height: 5.11,
//     email: "sadadsad@gmail.com",
//     display: function()
//     {
//         var txt = `Name: ${this.name}, Age: ${this.age}, Height ${this.height}, Email ${this.email}`;
//         return txt;
//     }
// }

// person2.number = "113";  // Dynamically add new attribute


// var result;
// result = person1.name;
// result = person2['email'];
// result = person2.number;

// console.log(result);

// /* // for...of: for array
// var a = [5,3.3,3,2];

// for (let item of a) // item will be each element of the array, no need of index
// {
//     console.log(item);
// }

// // for... in: for obj, traverse each property in obj
// for (let prop in person2) // the value of prop will be name, age, height, email (index for string)
// {
//     console.log(person2[prop]); 
//     // console.log(person2.prop);  you cant use dot notation, there s gonna be a property --> undefined
// }
//  */

// // dynamically create an obj
// var person3 = {}; // define person3 as an obj
// person3.phone = "123123123";
// person3.name = "Messi";

// var result;
// result = person3.phone;
// console.log(result);


// // (2) create on obj: constructor function
// var Person = function Person(nm, age) // Function expression
// {
//     this.name = nm;
//     this.age = age;
//     this.display =  function()
//     {
//         var txt = `Name: ${this.name}, Age: ${this.age}, Height ${this.height}, Email ${this.email}`;
//         return txt;
//     }
// }

// /* var person1 = new Person("Cris", 19);    // Created obj person1
// var person2 = new Person("Becca", 24);

// var result;
// result = person1.name;
// result = person2.name;


//  */

// result = person1.display();
// console.log(result);
 
// (3) Creare an obj: Prototypal inheritance
// Child inherits everything from parent

var person = 
{
    name: "",
    age: 0,
    email: "",
    marks: [], //represent 6 marks
    info: {}
};

var person1 = Object.create(person); // person1 is a clone of person
var person2 = Object.create(person);
var person3 = Object.create(person);

person1.name = "Cris",
person1.age = 19,
person1.email = "sdadsadsa@gmail.com";
person1.marks = [0,1,2,2,1,100];
person1['info'] = {hour:24, url:"https://crishuynh.senecacollege.ca"}; // This is an obj

person2.name = "Becca",
person2.age = 24,
person2.email = "sdadsadsa@gmail.com";
person2.marks = [0,1,2,2,1,100];
person2['info'] = {hour:24, url:"https:/beccatran.senecacollege.ca"};


//var person3 = {};
person3.name = "Sean",
person3.age = 22,
person3.email = "sdadsadsa@gmail.com";
person3.marks = [20,31,42,42,12,100];
person3['info'] = {hour:24, url:"https://seanmuniz.senecacollege.ca"};



var group = [person1, person2, person3]; // Array of objs

var total = 0;
// Person3 mark 100
//result = person3.mark[5];

//result = person3.info.url;

for (let person of group)// (let i = 0; i < group.length; i++)
{
    // var curPerson = group[i];
    // var hours = curPerson.info.hour;
    total += person.marks[5];
}

console.log(`${total/group.length}`);