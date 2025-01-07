// children of an element

//head and body : prents siblings h
// div : child h
// p and span dono div ke child h and siblings h

//descendant nodes :   all nested elements, children, thier children and son

// body ke descendant nodes : div, p span

// fisrtchild , lastchild, childnodes
// element.first child : first child element
// element.last child :last child element
// element.child nodes: all child nodes



// console.log(document.body.firstChild); // text h space bhi ho tho text deta h
// console.log(document.body.lastChild); //script tag
// console.log(document.body.childNodes); // all node list / all child nodes


// element.childNodes[0] === element.firstChild


// prents & siblings ----------

// note on dom collection 
//they are read-only
//they are live elem.childNodes varible wil automatically update it childnotes of elem is changed 
// they are iteralte using for...of loop


// $0 : first src =""
// $0.childNodes   / list of childnote

// prents & siblings: siblings are nodes that are children of the same parents
// ex : head and body 



                         //html 


     //head                                    body

                                    //div1       div2            div3


// html ka right siblings  body 
// body ka left siblings  head 
// head ka right siblings  body 

// head ka next siblings body //


// ---------first child div----

// console.log(document.body.firstChild)
// a = document.body.firstChild
// console.log(a.parentNode)
// console.log(a.parentElement)
// console.log(a.firstChild)

// parentNode : parentsNodes tbhi return krega koii value tb wo node h ex. common text jo bhi node h return krega

// parent elemtn: valid html element hoga tbhi return krega 

// document. documentElement. parentsElement
// agar parents ek element hoga tbhi return kiya jayega nhi tho null aayega 

