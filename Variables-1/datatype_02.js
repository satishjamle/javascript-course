// primative data type : 7

// nn bb ss u

// n = null    null value
// n = Number   any number //1,2,3,4,5....
// s = Symbol  ('any symbol) //
// s = String "hello word"
// b = Boolean true/false
// b = BigInt   123456n
// u = undefined let g = ?


let a =  null; 
let b = 345;
let c = Symbol('i am a symbol asing');
let d = "satish";
let e = true// can also be false
let f = BigInt('567') + BigInt('5')
let g = undefined

console.log(a,b,c,d,e,f,g)

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))




// non-primative :(key: value)

// object; (key: value)
// Array;
// function;

const items ={
    name:"satish",
    plcace: "indore",
    college :'Davv'
}
console.log(items)

console.log(items['plcace'])  //type of lookup
console.log(items['college'])

console.log(typeof(items))


