// OOPS : objet oriented progaramming : in programming we often take something and then extend it for example we might want to crate a user object and "admin" and "quest" will be slightly variants of it

//  javascript : support  object orientend programming

// oops four pillars
// Abstraction
// Encapsulation
// Inheritance
// Polymmorphism

// [[ prototype]]
// prototype : javascript objects have a special property called prototype that is either null or references another object


// let a = {
//   name: "satish",
//   role: "developer",
// };
// console.log(a);

// let p = {
//   run: () => {
//     alert("Run");
//   },
// };
// a.__proto__ = p; // set proto type :  p of a prototype

// a.run();


// set proto type :  prototype  of  prototype

// let a = {
//   name2: "satish",
//   role: "developer",
// };
// console.log(a);

// let p = {
//   run: () => {
//     alert("Run");
//   },
// };
//   p.__proto__ ={
//     name: "vijay",
//     role: "student"
//   }

// a.__proto__ = p;   

// a.run();
// console.log(a.name)
// console.log(a.role)

// note : prototype ka bhii prototype set kr skte h 
// a ka proto type p h first protopye me name nhi mileg tho uske baad wale prototype ke cheak krega same process chlti rhegi
