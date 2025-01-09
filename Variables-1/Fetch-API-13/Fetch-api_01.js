// frtch api : fetch is used to get data over the network
// api : aplication programming interface (json: javascript object notation),json like object {key:value}

// let promise = fetch(url, [option])
// without options  a get request is sent

//  code cheak :( status and ok ) response pta krne ke liye thik se aa rha ki nhi
// status between(200-299)
// console.log(value1.status)
//     console.log(value1.ok)

// response header : the response header are avaible in response header

//     console.log(response.ok)
//     console.log(response.status)
//  console.log(response.headers)
// return Response.json()

//request headers : to set a request header in fetch , we can use the header option

// let p = fetch("https://jsonplaceholder.typicode.com/users")

// p.then((value1) => {
//     console.log(value1.status)
//     console.log(value1.ok)
//         return value1.json()

//   }).then((value2) => {
//     console.log(value2)
//   });

// response headers
// let p = fetch("https://jsonplaceholder.typicode.com/users");

// p.then((response) => {
//   console.log(response.ok);
//   console.log(response.status);
//   console.log(response.headers);
//   return Response.json();
// }).then((value2) => {
//   console.log(value2);
// });

// post request : tomake a post request we need t use fetch options
//method : http-method.e.g post
//body : the request body



//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'SATISH',
//       body: 'BRO0THER',
//       userId: 1100,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));