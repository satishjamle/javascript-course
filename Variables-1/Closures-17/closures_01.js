// closure :  a closure  is the combination of a function bundled togethr eferenve to its surrounding state . In ohter words a closure gives you access to an outer function's scope from an inner function

// function hello1(){
//     message= ' good moring'
//     console.log('hello1' + message)
// }
// hello1()

// message= ' good global'
// function hello1(){
//     message= ' good moring'    // scope conccept h
//     console.log('hello-1 :' + message)
// }
// hello1()

// message = " good global";
// function hello1() {
//  let message = " good moring";

//   {
//    let message = " good afternoon";

//     console.log("hello-1 :" + message);
//   }
//   console.log(message);
// }
// hello1();

// message = " good global";
// function hello1() {
//  let message = " good moring"; // message is a local variable create by init

//    message = " good afternoon";

//     console.log("hello-1 :" + message);

//   let c = function hello2(){        // closures function hello2
//     console.log('iam c ' + message)
//   }
//   return c
// }
//  c = hello1();
//  c()

// function init() {
//   var name = "Mozilla"; // name is a local variable created y init

//   function displayName() {
//     //displayName is the inner function ,a closure
//     console.log(name); // use variable declared iln the parent function
//   }
//   name = "satish";

//   return displayName;
// }
// let c = init(); // init() kr rhe tho sare local variable chle jayege vut return kr rhe tho laxical invernment return kr rha h
// c();

// closure return hota h tho function return hota h usi ke sath sath uska laxcal invernment ke references return hota h


// function returnFunc(){
// const x = () => {
//   let a = 1;
//   console.log(a);
//   const y = () => { // y ke andar uska var nhi h tho parent ka var use krta h  laxical me dekhega
//     // let a = 2;
//     console.log(a);

//     const z = () => {
//     //   let a = 3;
//       console.log(a);
//     };
//     z()
//   };
//   a = 999
//   y()
// };
// return x
// }

// let a = returnFunc() 
// // a ek function bnega ,a ke andar function ke funcion ke andar ke variable bhii rhege
// a()

// clouser :  closure ek function hota h along with  its
// laxical invernment