// Math Object :

//PRINTING THE MATH OBJECT
let m = Math
console.log(m)

//printing the constants from math object
console.log("The value of Math.E is ",Math.E)
console.log("The value of Math.PI is ",Math.PI)
console.log("The value of Math.LN2 is ",Math.LN2)
console.log("The value of Math.SQRT1_2 is ",Math.SQRT1_2)
console.log("The value of Math.LOG2E is ",Math.LOG2E)


//printing the functions from math object
let a = 34.5498
let b = 68
console.log("the value of a and b is ",a,b)
console.log("the value of a and b rounded is ",Math.round(a),Math.random(b))


console.log(Math.pow(3,2))

console.log(Math.sqrt(64))

console.log(Math.sqrt(50))



// cell floor
console.log("rounded up to nearest integer is" , Math.ceil(5.8))
console.log("rounded down to nearest integer is" , Math.floor(5.8))


//Abs function
console.log("absolute value of 5.66 is",Math.abs(5.66))
console.log("absolute value of -5.66 is",Math.abs(-5.66))

//Trinonometric functions
console.log("the value of sin(pi)" , (Math.PI))
console.log("the value of sin(pi)" , (Math.PI/2))
console.log("the value of cos(pi)" , (Math.PI/2))



// Min and Max functions 
console.log(Math.min(4,5,8763,45,8))
console.log(Math.max(4,5,8763,45,8))


//generating a random number
console.log(Math.random())

let a1 = 1
let b1 = 100

//generating a random number (1-100) ke bich
let r1_100 =a1 + (b1-a1)*Math.random();
console.log(r1_100)