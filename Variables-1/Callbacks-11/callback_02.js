//  callback function : a callback function is a function passed into anoter function as an argument which is then invoked inside the outer function to comlete on action

 //The callbacks are used to ensure that each function completes before the next one starts. If we didn't use callbacks and tried to run the functions normally, they would run in parallel, and the output would not follow the intended order.

// callback

// function sayhello() {
//   console.log("hello..");
// }

// function add(num1, num2, callback) {
//   console.log(num1 + num2);
//   callback();
// }
// let a = 10;
// let b = 20;

// add(a, b, sayhello);

//  function :  function ke andar function or ek or new function add krna ho tho ......

// function sayhello() {
//   console.log("hello..");
// }
// function sayhii(){
//     console.log("Hii Admin.....")
// }

// function add(num1, num2, callback) {
//   console.log(num1 + num2);
//   callback();
// }
// let a = 10;
// let b = 20;

// add(a, b, sayhello);
// add(a, b, sayhii);

// anonymous function

// function sayhello() {
//   console.log("hello..");
// }
// function sayhii(){
//     console.log("Hii Admin.....")
// }

// function add(num1, num2, callback) {
//   console.log(num1 + num2);
//   callback();
// }
// let a = 10;
// let b = 20;

// add(a, b, sayhello);
// add(a, b, sayhii);

// add(35, 15, function(){            //anonymous function
//     console.log("bye...")
// });

// function callback() {
//   alert("callback function executed");
// }
// console.log(1);

// setTimeout(callback, 5000);
// console.log(2);

// function callback() {
//   console.log(1.1);
// }

// function sayhello(name){
//     console.log('satish')
// }
// console.log(1)

// setTimeout(callback ,5000)
// console.log(2)

// setTimeout(sayhello , 8000)
// console.log("do not excute async code")

// function callback(){
//     console.log(3)
// }

// console.log("Satish reached the restaurant");

// function callWater(order) {
//   console.log("How can I help you, sir?");
//   order(billing);
// }

// function order(billing) {
//   console.log("Can I have one plate paneer paratha?");
//   billing(bye);
// }

// function billing(callback) {
//   console.log("Here is your bill, sir.");
//   callback();
// }

// function bye() {
//   console.log("Bye sir, and thank you for the delicious food.");
// }

// // Start the sequence correctly
// setTimeout(() => callWater(order), 8000);


// console.log("i am reached a restaurant");
// function callWater() {
//   console.log("how can i help you sir");

//   function order() {
//     console.log("can i hava a one plate paneer paratha");

//     function billing() {
//       console.log("here is your bill sir");

//       function Bye() {
//         console.log("bye sir and thank you for this delecious food");
//       }
//       Bye();
//     }
//     billing();
//   }
//   order();
// }
// callWater();




// console.log("i am reached a restaurant");
// function callWater() {
//     setTimeout(()=>{
//   console.log("how can i help you sir");
  
//     },4000)

//   function order() {
//     setInterval(()=>{
//     console.log("can i hava a one plate paneer paratha");
// },7000)

//     function billing() {

//       console.log("here is your bill sir");

//       function Bye() {
       
//         setTimeout(()=>{
//             console.log("bye sir and thank you for this delecious food");

//         },5000)
//       }
//       Bye();
//     }
//     billing();
//   }
//   order();
// }
// callWater();

//callback : The callbacks are used to ensure that each function completes before the next one starts. If we didn't use callbacks and tried to run the functions normally, they would run in parallel, and the output would not follow the intended order.

// function fun1(callback){
//     setTimeout(()=>{
//     console.log('fun1')
//     callback()
//     },3000)
// }

// function fun2(callback){
//     setTimeout(()=>{
//     console.log('fun2')
//     callback()
//     },1000)
// }

// function fun3(callback){
//     setTimeout(()=>{
//     console.log('fun3')
//     callback()
//     },10000)
// }

// function fun4(callback){
//     setTimeout(()=>{
//     console.log('fun4')
//     callback()
//     },5000)
// }

// fun1(()=>{
//     fun2(()=>{
//         fun3(()=>{
//             fun4(()=>{
//                 console.log("execution finished successfully")
//             })
//         })
//     })
// })
