// Destructuring : destructuring assignment is used to unpack values from an aarray or proferties from objects , into distinct variables

// let arr = [3,5,7,9,11,13]
// let [a,b,c,d] = arr

// console.log(a,b,c,d)
// console.log(a,b,c,d,e)      // e: is not defined

// let arr = [3,5,7,9,11,13]
// let [a,b,c,d,...rest] = arr

// console.log(a,b,c,rest)

// bace element rest naame ke arr me aa jayege

// let arr = [3, 5, 7, 9, 11, 13, 15];
// let [a,b , , , ...rest] = arr;
// console.log(a,b, rest);

// let { a,b} = {a:3 ,b:5}
// console.log
// (a,b)

// Spread Syntax : spread syntax allows an iterable such as an array or string to be expanded in places where zero or more orgument are expected in an object leteral the spredad syntax enumerates the proerties of an object and adds the key-value pairs to the object being created .


// spread syntax :(...)

// let arr = [2, 4, 6]; 
// let obj1 = { ...arr };  // arr ko object me change
// console.log(obj1);

// // are ki value function me pass kese kre : 

// function sum(v1, v2, v3) {
//   return v1 + v2 + v3;

// }
// console.log(sum(...arr));



// name change krna h

// let obj2 = {
//     name :"satish",
//     company: "Tech  mahindra",
//     address : "indore"
// }

// console.log({...obj2 ,name:"ajay"})                    // overwrite hogi esme obj ke baad jo bhi likha 
//  console.log({name:"Aman",address:"Dewas", ...obj2})   // overwrite nhi hogi  esme kewki  obj ke phle jo  likha  h


