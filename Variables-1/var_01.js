// variable
//let and const provide block level scope hich means that the variable seclared inside a {} cannot be accesed from outside the block

// {
//     let a = 23 // a is not avaible here
// }

// var : no use
// let: some cases me  use krna h
// const: more cases using for const

// store: number , String, Array etc

// var

// var a= 67;
// console.log(a) //67

// var a = 12;
// a= "admin"
// console.log(a)  ///admin

// var a = 12;
// var a = 13;
// console.log(a)  //13

// var a = 15
// // // var: function phle  call hota h  , finction ke andar scope hota h

// {
//     var a = 20

// }
// console.log(a)  //20

// ---------------------let------------------

// let

// let a = 20
// console.log(a)  20

// let a = 20;
// a = 30
// console.log(a) 30

// let a = 20;    already declear
// let a = 10

// let a = 20;

// // let : function baad me call hota h , function ke bhar scope hota h
// {
//     let a = 30
// }
// console.log(a)   //20

// let  a = 10
// let b = 20
// console.log(a+b)

// let name = "admin"
// console.log(typeof(name))

// ----------------------const---------------------

// const a = 10
// console.log(a)  10

// const b = 20
// b = 30              //  error

// const a = 10
// const a = 30           // constant hota h const not a re-diclear

// const b = 20
// {
//     const b = 30
// }
// console.log(b)              // 20

// {
//     var a = "this"
//     var b = "admin"
//     console.log(b)
// }
// console.log(a)

// let a = 45
// let a = "admin" //error

// const auther = "mangilaal"
// let auther = "kalidash" // already declear

// const harry = 'thapa'
// const thpa ="user"
// console.log(thpa,harry)

// full hosting

// funx(c) {
//     let b = 10;
//     return c;
// }
// x(12)
// console.log(c)
// console.log(a)

// c not a difine ,not a create only store

// ans : not s  difine

// block scope
// functon scope
// global scope

// block and function scope dono local scope variable hote h

// scope

// function ax(){
//     let  a = 7
//     console.log(a)  // function scope h
// }
// ax()
// console.log(a)

//  global scope : andar bhar dono jgh scope hota h

// let p = 10
// function ax(){
//     let  a = 7
//     console.log(a)  // function scope h
//     console.log(p)
// }
// ax()
// console.log(a)
// console.log(p)

// Hoisting : hoisting repers to the process whereby the interpreter appears to move the diclarations to the tip of the code before execution

//  variables can this be rejected before they are declared in javascript

// declaration hoisted to the top but initialization is not

// greet();

// function greet() {
//   console.log("good moring");
// }



// console.log(a);
// greet();

// function greet() {
//   console.log("good moring");
// }
// let a = 8      // let : cannot access a before initialization 
// console.log(a);
// hoisting nhi  hoti h let ,const me initialization se phle 



// let b ;
// console.log(a);
// greet();

// function greet() {
//   console.log("good moring");
// }
// var a = 8  // hoisting ho jaati h var me 
// console.log(a);



// function expression and class  expression are not hoisted 

// console.log(a);
// greet();

// var greet = function(){           // expression function = fun(){}
//   console.log("good moring");
// }
// var a = 8  // hoisting ho jaati h var me 
// console.log(a);


// // Using let for function declaration with proper syntax
// let greet = function() {  // Added parentheses here
//     console.log("good morning");  // Fixed spelling
// };

// // Using const instead of var for better scoping
// const a = 8;  // Using const since the value won't be reassigned
// console.log(a);

// // Let's test the function
// greet();
