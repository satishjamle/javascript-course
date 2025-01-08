//  InnerHtml
// innerHtml ko get or set dono ke skte h
// inner me sirf tag  or andar ka  element aata h
// innerHtml only vilde for nodeselement

//outerHtml
//  outerHtml :  element or content dono aa jate h
// pura tag class content sb kuch aa jata h jo bhii rhta

// first.innerHTML
// ' <b>Hii</b>hey i am span'

// first.outerHTML = '<span id="first"> <b>Hii</b>hey i am span</span>'

//text content : text dega

// console.log(document.body.textContent)

// hello word
// Hiihey i am span

//hidden
//$0.hidden : false
// $0.hidden = false : show hoga
// $0.hidden = true : show nhi hoga

//---------- html attributes---------

// get attributes

// let a = first.getAttribute("class")
// console.log(a)

// set attributes

// let first = document.getElementById("first");

// let a = first.getAttribute("class");

// console.log(a);

// console.log(first.hasAttribute("class"));

// console.log(first.hasAttribute("style"));

// first.setAttribute("hidden" ,"true")
// Get the value of the 'class' attribute


//------- remove Attribute ------

// remove : mehtod to remove the attributes from element

// first.removeAttribute("class")

// ElementAttribute  
// first.removeAttribute("class")
// console.log(first.attributes)


// data- * attributes : khud ke custom attributes bna skte h (data dash krke)


// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)

// output: - DOMStringMap {game: 'mario', player: 'satish'}
// index.js:65 mario
// index.js:66 satish