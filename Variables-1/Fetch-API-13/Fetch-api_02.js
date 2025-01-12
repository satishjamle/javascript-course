// fetch api :  the fetch api provides  a fetch() method defined on the window object, whilch you can use to perform requests

// this method returns a promise that you can use to retrieve the response of the request

// the respose and request

// fetch('https://jsonplaceholder.typicode.com/albums')

// .then((apidata)=>{
//     // console.log(apidata)
//     return apidata.json()

// })
// .then((actuldata)=>{
//     console.log(actuldata)

// }).catch((error)=>{
//     console.log(error)

// })

// Async await : There is a special syntax to work with promises in javascript
// a function can be made async by using async key word like this :

// async function name(params) {
//     return

// }
//  name().then(alert)

// An async function always returns a promise ohter values ar wrapped in a promise automatically
// name().then(alert)

// so async ensures that the function returns a promise and wraps non promises in it

// async function admin(){
//     return  5

// }
// admin().then((x)=>{
//     alert(x)
// })

// async function satish() {
//   let IndoreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 Degree");
//     }, 2000);
//   });

//   let MumbaiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("21 Degree");
//     }, 5000);
//   });
//   // IndoreWeather.then(alert)
//   // MumbaiWeather.then(alert)
//   console.log("Fetching Indore weather please wait....");
//   let IndoreW = await IndoreWeather;
//   console.log("Fetched Indore Weather : " + IndoreW);

//   console.log("Fetching Mumbai weather please wait....");

//   let mumbaiW = await MumbaiWeather;
//   console.log("Fetched Mumbai Weather : " + mumbaiW);
//   return [IndoreW, mumbaiW];
// }
// const cherry = () => {
//   console.log("Hey I am cherry and I am not waiting");
// };

// console.log("welcome to weather control room");
// let a = satish();
// let b = cherry();
// a.then((value) => {
//   console.log(value);
// });


// async function satish() {
//     let IndoreWeather = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("27 Degree");
//       }, 2000);
//     });
  
//     let MumbaiWeather = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("21 Degree");
//       }, 5000);
//     });
//     // IndoreWeather.then(alert)
//     // MumbaiWeather.then(alert)
//     console.log("Fetching Indore weather please wait....");
//     let IndoreW = await IndoreWeather;
//     console.log("Fetched Indore Weather : " + IndoreW);
  
//     console.log("Fetching Mumbai weather please wait....");
  
//     let mumbaiW = await MumbaiWeather;
//     console.log("Fetched Mumbai Weather : " + mumbaiW);
//     return [IndoreW, mumbaiW];
//   }
//   const cherry = () => {
//     console.log("Hey I am cherry and I am  waiting");
//   };
  
//    const main = async ()=>{
//   console.log("welcome to weather control room");
//   let a = await satish();
//   let b = await cherry();

// }
// main()
// 