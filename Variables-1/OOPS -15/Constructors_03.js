

// Constructors : The constructor method  is called automatically a new obejct with all the listed methods 
//(kuch na chle tho constructor tho chlega hee chlega)
 

// class Railwayform {
// constructor(){
//     console.log("constructor called...")
// }

//   submit() {
//     alert( this.name + " Your is form submitted for train number :" + this.trainno);
//   }
//   cancel() {
//     alert( this.name + " Your is form cancel for train number :" + this.trainno);
//   }
//   fill(given_name ,trainno){
//     this.name = given_name
//     this.trainno =trainno
//   }
// }
// let Ravi = new Railwayform();             //create a form for ravi 
// Ravi.fill("Aman" , 12907)               // fill the form with harry details

// let vijay1 = new Railwayform();
// // vijay1.fill("vijay" ,501555)     // withuut form fill submitted 

// let vijay = new Railwayform();
// // vijay.fill("Ajay" ,501545)

// Ravi.submit();
// vijay.submit();
// vijay.cancel();
// vijay1.cancel()

// Another way

// class Railwayform {
//     constructor(given_name ,trainno){
//         console.log("constructor called..." +given_name +" "+ trainno)
//         this.name = given_name
//         this.trainno =trainno
//     }
    
//       submit() {
//         alert( this.name + " Your is form submitted for train number :" + this.trainno);
//       }
//       cancel() {
//         alert( this.name + " Your is form cancel for train number :" + this.trainno);
//       }
    
//     }
//     let Ravi = new Railwayform("Aman" , 12907);             
    
//     let vijay1 = new Railwayform("sanjay" , 71209);
    
//     let vijay = new Railwayform("vijay" , 501545);
    
//     Ravi.submit();
//     vijay.submit();
//     vijay.cancel();
//     vijay1.cancel()





// single form :

// class Railwayform {
//     constructor(given_name ,trainno,Address){
//         console.log("constructor called..." +given_name +" "+ trainno +""+Address)
//         this.name = given_name
//         this.trainno =trainno
//         this.Address =Address
//     }
    
//       preview() {
//         alert( this.name + " Please check if your form has been correctly submitted for the train number " + this.trainno +" and your address is " + this.Address);
//       }
    
//       submit() {
//         alert( this.name + " Your is form submitted for train number : " + this.trainno +" and your address is " + this.Address);
//       }
//       cancel() {
//         alert( this.name + " Your is form cancel for train number :" + this.trainno +" and your address is " + this.Address)
//         this.trainno = 0
//       }
    
//     }
//     let satishForm  = new Railwayform("satish" , 313213 , "Andaman and Nicobar Islands -744101 ")
//     satishForm.preview()
//     satishForm.submit()
//     satishForm.cancel()
    