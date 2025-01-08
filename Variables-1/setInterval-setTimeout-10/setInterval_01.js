// setInterval

// setTimeout : the setinterval() method repeatsa given function at every given time=interval

//syntax : setinerval(function , milliseconds)
// function : first parameter is the function to be executed
// millisecond : indicates the length of the time-interal between each execution

// setInterval(functionName , millisecond)


// setInterval : perticular time jo set kiya h  uske baad code chlta hee rhe
// jo bhi time set kiya uske baad code chlta hee rhta h har 3second ke baad code run hota hee rhega

// setInterval(()=>{
//     document.write("setInterval ")
// },3000)


// var a = 0 ;
// setInterval(Anim ,2000);
// function Anim(){
//     a = a + 5
//     console.log(a)
// }

// let b = 0;
// setInterval(user,2000);

// function user(){
//     b = b+ 3
//     console.log(b)
// }



// setinterval : setinterval jo bhii time set kiya uske utne second baad function run hota hee rhega

//clearTimeout : animation ko close krne ke liye

// alag alag tarike se call krna setinterval ko


//index.html 
// <button onclick="test()">click me</button>


// function test(){
//     setInterval(() => {
//         alert("hello word")
//     }, 5000);
    

// }
// test()


// function test(){
//     setInterval(test ,3000)   
//     document.write('helo user')


// }
// test()

// function test(){
//     setInterval(
//         function(){
//             alert("hello word !! ")
//         },2000
//     )
// }



// function test(){
//     setInterval(
//         function(){
//             document.write(" setinterval code run")
//             document.write("1000 ")
//         },3000
//     )
// }