
// string methods : string are used to store and manupilate text string can be created using the followning syntext

//string : original string kkbhi bhi change nhi hoti h new string return ho jayegi

// string : collection of creator 

// let names = "satish"      // create a string
// console.log(names.length)


// let friend = 'prakash'
// console.log(friend)

// let friends = 'prakash'
// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[4])



/// template literals

// let boy1 = "Vinod"
// let boy2 = "Akash"
// // Akash is a fried of vinod

// let friend = `${boy2} is a friend of ${boy1} `
// console.log(friend)


// Escape sequence characters : backslash \ print nhi hota h

// let fruit = 'bana\'na'
// console.log(fruit)
// console.log(fruit.length)       // \' one creator   h , 

// let fruits = "Oran\"ge"
// console.log(fruits)
// console.log(fruits.length)

// \ n -> newline
// \ t -> tali 
// \ r -> caring return


// let fruit = 'bana\n na'  // \n newline deta h
// let fruits = 'banana\tapple'  // \t space deta h
// let frts = 'banana\r orange'  // \r  replace krta h
// console.log(fruit)
// console.log(fruits)
// console.log(frts)

//

// let name = "santosh"
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())


// string ka index 0 se start hota h 

// slice : first index include , last index not include 

// let name = "devoloper"
// console.log(name.slice(2,4))
// console.log(name.slice(4))

// Replace : creator replace & Exact creator hoga tho hee match hoga nhii tho same string return kr dega

// let name = "satish"
// console.log(name.replace("ti" ,"nto"))
// console.log(name.replace("Ti" ,"nto"))

// concat : two string ko add krna
// let fname = "satish"
// let lname = "jamle"
// console.log(fname.concat(lname))


// trim: starting and end ki space remove krta h 
// let user = "     developer  "
// console.log(user.trim())

// let name = "shivani"
// console.log(name[2])

// string add

// let name = "shivani"+ ' ' +"vijay"   
// console.log(name)


// include : true ya false return krta h
//  string me h tho true nhi tho false

// const sentence = 'the quick brown fox jumps over the lazy dog'
// const word = 'fox'
// console.log(sentence.includes(word))


// startwith endwith

// let str = "this is a javascript code, and project based chat sheet" 
//  console.log(str.startsWith('code'))

// let str1 = "this is a javascript code, and project based chat sheet" 
//  console.log(str.startsWith('this'))

// let str2 = "this is a javascript code, and project based chat sheet" 
//  console.log(str.endsWith('sheet'))

// let name = "this is a javascript code, and project based chat sheet" 
//  console.log(name.endsWith('project'))



// compair

// let str = "vishwajeet"
// if("vishwajeet" == str) {    // A = a  not equal
//     console.log("equal")
// }
// else{
//     console.log("not equal")
// }



// sub string

// let str = "this is a javascrit function"
// let substring = str.substring(8,15)
// console.log(substring)

// index of funtion : index position janne ke liye 
// let str = "this is a javascript function"
// let position = str.indexOf('a')
// console.log(position)

// lastindexof
// let str = "this is any javascript function, it is a good function and language"

// let position = str.lastIndexOf('is')

// // let position = str.lastIndexOf('add') // -1 nhii h tho esme creactor
// console.log(position)


// trimed trimstart ,trimEnd

// let str = '           this is  javascript  '
// // console.log(str.trimStart())

// console.log(str.trimEnd())


// replace
//  let str = "this is a javascript function"
//  let newstr = str.replace('javascript', 'reactjs')
//  console.log(newstr)

// include : true/false 
// perticular items h ya nhi 

//  let str = "this is a javascript function"
//  let newstr = str.includes('javascrt')
//  console.log(newstr)

///  array from
// string ko array me 

// let name = "satish"
// let array = Array.from(name)
// console.log(array)
// console.log(typeof(array))


/// search : position return krta h index ki
//  let str = "this is a javascript function"
//  let newstr = str.search('')
//  console.log(newstr)


// match : same name ka creator bar bar search krta fir retuern krta h

//  let str = "this is a javascript function  javascript is a backend and frontend language javascript use full language"
//  let newstr = str.match(/is/)
// //  let newstr = str.match(/javascript/)
//  console.log(newstr)



