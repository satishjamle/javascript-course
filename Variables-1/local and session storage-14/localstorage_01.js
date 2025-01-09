// localstorage : localstorage is a web storage object which are not sent to server with each request this data serviers a fill page replesh and even a full browser restart

//these are the methods provided by localstorage

//localStorage.setItem(key,value)

// setItem : (key, value) store key/value pair
// getItem  :  (key) get the value by key
// removeItem  :  (key)  remove the key with its vlaue
// clear :   delte everything
// key (index)  :  get the key on a given postion
// length  :  the number of stored items



// let key = prompt("Enter key you want to set ");
// let value = prompt("Enter value you want to set");

// localStorage.setItem(key, value);
// console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// if (key == "red" || kry == "blue") {
//   localStorage.removeItem(key);
// }

// if (key == 0) {
//   localStorage.clear();
// }




// we can get and set value like an Object

// localStorage.one = 1
// alert(localStorage.one)
// delete localStorage.one

// important Notes : 
// Both key and values must be strings
// we can use the two json methods to store objects in localstorage

// json stringify(object) -> obj to json strings
// json parse(string )    -> string to objects