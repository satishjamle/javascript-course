// arrays methods

// let num = [1,2,3,55,34,'satish']
// let b  =num.toString()
// console.log(b)

// join

// let num = [1,3,4,45,65]
// let c = num.join("_")
// console.log(c)
// console.log(c , typeof(c))

// pop : remove last element from the array / pop return the popped element

// let n = [1,3,4,45,65]
// let a = n.pop()
// console.log(n,a)

//push : return the new array lenght

// let array = [1,3,4,45,65]
// let newarray = array.push(75) // add the last element from the array
// console.log(array,newarray)

// shift : remove an elemts start of the array

// let array = [1,3,4,45,65]
// let newarray = array.shift()
// console.log(array,newarray)

// unshift : add an elemnt start of the array

// let array = [1,3,4,45,65]
// let newarray = array.unshift(22)
// console.log(array,newarray)

// delete : opeator h

// let array = [1,2,3,4,5,6,7,8,9,]
//  delete array[0]
//  delete array[4]
// console.log(array)

// console.log(array.length) //lenght same rhti  ,koii change nhi hota array ki lenght me

// contact: muiltiple are ko merge krne ke liye

// let array = [1,2,3,4,5,6,7,8,9,]
// let array2 = [12,14,14,15,16,17]

// let newarray = array.concat(array2)
// console.log(newarray)
// console.log(newarray.length) // lenght
// console.log(newarray.length-1) // total of index number

// sort : array ko alphabetically sort krta h
// ex- 1 ,12,21,25,251
// note : orginal array ko sort krne ke liye
//

// let array = [54,45,23,12,54,77,76,78,65,125,245]
// array.sort()
// console.log(array)

// scending order / compare function

// let compare =(a,b) => {
//     return a - b ;
// }

// let array = [54,45,23,12,54,77,76,78,65,125,245]
// array.sort(compare)
// console.log(array)

// ascending order

// let compare = (a,b) =>{
//     return b - a
// }
//  let array = [54,45,23,12,54,77,76,78,65,125,245]

// array.sort(compare)
// console.log(array)

// reverse : orange arraye ko change kr deta h ulta kr deta h  array ko

// let array = [54,45,23,12,54,77,76,78,65,125,245]
// array.reverse()
// console.log(array)

// splice

//array.splice(startIndex, deleteCount, item1, item2, ..., itemN)
// : splice can be used to add new items to an array
//Note:- KHA ADD KRNA H , KITNE ITEM REMOVE KRNA H , JO JO ELEMENTS ADD KRNA H

// let array = [54, 45, 23, 12, 54, 55, 15, 20];
// array.splice(2, 0, 1010, 1012, 1014);

// // index 2 se start huwa , o index chod ke , 3 element add krne the

// console.log(array);

// let array1 = [54, 45, 23, 12, 105, 55, 15, 20];
// array1.splice(1, 3, 1010, 1012, 1014);
// //1- 54,45 //3-23,12,54,55  //1010 1012 1014
// console.log(array1);

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// array2.splice(3, 3, 1010, 1012, 1014);
// //1- 54,45 //3-23,12,54,55  //1010 1012 1014
// console.log(array2);

// slice : slice out a piece from an array it create a  new array
//  let array = [54, 45, 23, 12, 54, 55, 15, 20];
//  let newarray = array.slice(3) // 3 se lakar sare element milege
//  console.log(newarray)

//  let array1 = [54, 45, 23, 12, 54, 55, 15, 20];
//  let newarray1 = array1.slice(3,6)
//   // 3 se start krega 5 ko include nhi krega lakar sare element milege
//  console.log(newarray1)
