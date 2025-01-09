// promise : promise ar used to handle  asynchronous operations in javascript

//fullflled : action related to the promise successed
// Rejected :  action related to the promise filled
// pending : promise is still pending i.e. not fullfilled or regected yet

//(while a promise object is "pending" working the result is undefined )

// promise : resolve ----    then() // condition fullfill ho chuki h
// promise : reject ------   catch() / /condition fail  ho chuki h

// let promises = new Promise((resolve, reject) => {
//   let age = 12;
//   if (age >= 18) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// console.log(promises);
// promises
//   .then(() => {
//     console.log("Resolve your request");
//   })
//   .catch(() => {
//     console.log("Request is reject");
//   });

// let complete = true
// let prom = new Promise((resolve,reject)=>{
//     if(complete){
//         resolve("successfull")
//     }
//     else{
//         reject("failled")
//     }
// })
// console.log(prom)

// function prom(complete) {
//   return new Promise((resolve, reject) => {
//     console.log("fetching data ,please wait....");
//     setTimeout(() => {
//       if (complete) {
//         resolve("successfull");
//       } else {
//         reject("failled");
//       }
//     }, 3000);
//   });
// }
// // console.log(prom(false));

// let onfulfilment = (result) => {
//   console.log(result);
// };
// let onRejection = (error) => {
//   console.log(error);
// };

// // prom(true).then(onfulfilment);
// // prom(true).catch(onRejection);

// prom(false).then(onfulfilment).catch(onRejection);

// // prom(false).then(onfulfilment);
// // prom(false).catch(onRejection);


// final code 

// function prom(complete) {
//   return new Promise((resolve, reject) => {
//     console.log("fetching data ,please wait....");
//     setTimeout(() => {
//       if (complete) {
//         resolve("successfull");
//       } else {
//         reject("failled");
//       }
//     }, 3000);
//   });
// }

// prom(false).then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   }
//   );

// function prom(a ,b) {
//   return new Promise((resolve, reject) => {
//     console.log("fetching data ,please wait....");

//     var c = a/b;
//     setTimeout(() => {
//       if (a,b) {
//         resolve(`your answer : ${c}`);
//       } else {
//         reject("failed to calculate");
//       }
//     }, 3000);
//   });
// }

// prom(9,2).then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   }
//   );

// function step1(){
//   return new Promise((res, rej) => {
//     console.log("Starting to boil water");
//     setTimeout(() => {
//       let data = {step1: 'boiling water'};
//       res(data);
//     }, 3000);
//   });
// }

// function step2(data) {
//   return new Promise((res, rej) => {
//     console.log("Finished boiling water");
//     setTimeout(() => {
//       data.step2 = 'finished boiling water';
//       res(data);
//     }, 5000);
//   });
// }

// function step3(data) {
//   return new Promise((res, rej) => {
//     console.log("Maggie masala and Maggie");
//     setTimeout(() => {
//       data.step3 = 'Maggie and Maggie masala';
//       res(data);
//     }, 7000);
//   });
// }

// function step4(data) {
//   return new Promise((res, rej) => {
//     console.log("Maggie finished");
//     setTimeout(() => {
//       data.step4 = 'Maggie finished';
//       res(data);
//     }, 9000);
//   });
// }

// step1()
//   .then((data) => step2(data))
//   .then((data1) => step3(data1))
//   .then((data2) => step4(data2))
//   .then((data3) => {
//     console.log('Final data:', data3);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   });


// let obj = {a : 1}
// obj={...obj ,b:2}
// console.log(obj)

// function step1() {
//   return new Promise((res, rej) => {
//     // console.log('started boiling water')
//     setTimeout(() => {
//       let data = { step1: 'boiling water' }
//       res(data)
//     }, 2000)
//   })
// }

// function step2(data) {
//   return new Promise((res, rej) => {
//     // console.log('finished boiling water')
//     setTimeout(() => {
//       data = { ...data, step2: 'finished boiling water' }
//       res(data)
//     }, 2000)
//   })
// }

// function step3(data) {
//   return new Promise((res, rej) => {
//     // console.log('maggie masala and maggie')
//     setTimeout(() => {
//       data = { ...data, step3: 'maggie masala and maggie' }
//       res(data)
//     }, 2000)
//   })
// }

// function step4(data) {
//   return new Promise((res, rej) => {
//     // console.log('maggie finished')
//     setTimeout(() => {
//       data = { ...data, step4: 'maggie finished,enjoy' }
//       res(data)
//     }, 2000)
//   })
// }

// let obj={a:1}
// obj={...obj,b:2}
// console.log(obj)

// let result = step1()
//   .then((data) => step2(data))
//   .then((data1) => step3(data1))
//   .then((data2) => step4(data2))
//   .then((data3) => data3)
//   .catch((err) => console.log(err))

// result.then((data)=>console.log(data))


////Promises Chaining : we can chain promises and make than pass the resolved values to one anoter like this

//  let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("resolve after 2 second");
//     resolve(56);
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("promise 2")

//     }, 2000);

// })
// return p2

// }).then((value)=>{
//     console.log("we are done")
// }).then((value)=>{
//     console.log('now we ar confirm done')
// })



// attaching , multiple handlers

// let p1 = new Promise((resolve, reject) => {
//   alert("hey i am resolved");

//   setTimeout(() => {
//     resolve(1);
//   }, 3000)
// })
//   p1.then((value) => {
//     console.log("congratulation this promise is now resolved");
  
// })
// p1.then(()=>{
//     console.log(" Happy..😀😀")
// })


// let p1 = new Promise((resolve, reject) => {
//     alert("hey i am resolved");
  
//     setTimeout(() => {
//       resolve(1);
//     }, 3000)
//   })
//     p1.then((value) => {
//       console.log("congratulation this promise is now resolved");
//       return new Promise((resolve,reject)=>{
//           setTimeout(() => {
  
//               resolve(45)
              
//           }, 5000);
  
//       }).then((value)=>{console.log(value)})
    
//   })
//   p1.then(()=>{
//       console.log(" Happy..😀😀")
//   })