// change the card title  
// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = 'red'

//ya 

let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = 'green'

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color ="blue"
ctitles[1].style.color ="green"
ctitles[2].style.color ="red"
console.log(ctitles)


document.querySelector(".this").style.color ='white'
document.querySelector(".this").style.background ="black"


console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))

console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName('search'))