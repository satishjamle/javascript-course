// promise api :

//promise.all : waits for all promise to resolve and returns the array of thier rsultss if any one fails,  becomes the error & all other results are ignored

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 1");
//     }, 1000);
//   });
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 2");
//     }, 2000);
//   });
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 3");
//     }, 3000);
//   });
  
//   p1.then((value) => {
//     console.log(value);
//   });
//   p2.then((value) => {
//     console.log(value);
//   });
//   p3.then((value) => {
//     console.log(value);
//   });
  



// let promise_all = Promise.all([p1,p2,p3]) 
// promise_all.then((value)=>{
//     console.log(value)
// })

// promise.all ek bhi promise reject huee tho promise.all nhi chlegi uske liye promise all settled ka use krege

// Promise allSettled : promise reject hone ke baad bhii eroor nhi milta h haame us promise ka status or value dekhne ko milta h 

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 1");
//     }, 1000);
//   });
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("error"));
//     }, 2000);
//   });
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 3");
//     }, 3000);
//   });


// let promise_all = Promise.allSettled([p1,p2,p3]) 
// promise_all.then((value)=>{
//     console.log(value)
// })


// promise.race : waits for the first promise to settle and its result/error and value outcome
// jo value phle ho jaye resolve wahi pahle dekhne ko milega



// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 1");
//     }, 9000);
//   });
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 2");
//     }, 4000);
//   });
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 3");
//     }, 7000);
//   });

// let promise_all = Promise.race([p1,p2,p3]) 
// promise_all.then((value)=>{
//     console.log(value)
// })

// promise.any : waits for the first promise to fulfil and its result becomes the outcome throws affregate error if all the promises ar rejected 

// promise.any : koiii promise reject ho gy tho 


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 1");
//     }, 7000);
//   });
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("error"));
//     }, 2000);
//   });
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 3");
//     }, 5000);
//   });


// let promise_all = Promise.any([p1,p2,p3]) 
// promise_all.then((value)=>{
//     console.log(value)
// })



// resolve / reject 

// let promise_all = Promise.resolve(6) 
// let promise_all = Promise.reject(new Error("hey...")) 
// promise_all.then((value)=>{
//     console.log(value)
// })

