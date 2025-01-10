
// Encapsulation : The wrapping of data member (property) and member function (method) into a single unit  is called data encapsulation

// class Employee {
//   setEmpDetails(name, id, phoneNo) {
//     this.name = name;
//     this.id = id;
//     this.phoneNo = phoneNo;
//   }
//   getEmpName() {
//     return this.name;
//   }
//   getEmpId() {
//     return this.id;
//   }
//   getEmpphoneNo() {
//     return this.phoneNo;
//   }

// }

// let Emp1 = new Employee()
// Emp1.setEmpDetails( 'satish' ,1010 , +91-7273545685)
// console.log(Emp1.getEmpName())
// console.log(Emp1.getEmpId())
// console.log(Emp1.getEmpphoneNo())




// Abstraction : A abstraction is a way of hiding the implemetaion details and showing only the functionality th the users

// function Employee(name, age, baseSalary) {
//     this.name = name;
//     this.age = age;
//     this.baseSalary = baseSalary;
//     this.monthlyBonus = 1000;
  
//     // let monthlyBonus = 1000
  
//     this.calculateFinalsalary = function () {
//       let finalsalary = this.baseSalary + this.monthlyBonus;
  
//       //     second method
//       // let calculateFinalsalary = function(){
//       //     let finalsalary = baseSalary + monthlyBonus
  
//       console.log(`final salary is : ${finalsalary}`);
//     };
  
//     this.getEmpDetails = function () {
//       console.log("name :" + this.name + " age : " + this.age);
  
//       // calculateFinalsalary()
//     };
//   }
//   let Emp1 = new Employee("john", 30, 5000);
//   Emp1.getEmpDetails();
//   Emp1.monthlyBonus = 10000;
//   Emp1.calculateFinalsalary();


// method second : solve of abstraction method

// function Employee(name, age, baseSalary) {
//     this.name = name;
//     this.age = age;
//     this.baseSalary = baseSalary;
  
//     let monthlyBonus = 1000
  
 
//       let calculateFinalsalary = function(){
//           let finalsalary = baseSalary + monthlyBonus
  
//       console.log(`final salary is : ${finalsalary}`);
//     };
  
//     this.getEmpDetails = function () {
//       console.log("name :" + this.name + " age : " + this.age);
  
//       calculateFinalsalary()
//     };
//   }
//   let Emp1 = new Employee("john", 30, 5000);
//   Emp1.getEmpDetails();
//   Emp1.monthlyBonus = 10000;
  


// Polymorphism : many forms
// poly = many 
// morph = forms

// class Animal{
//     constructor(name){
//         this.name = name

//     }
//     eat (){
//         console.log(this.name + ' eats food')
//     }


// }

// class  Alligator extends Animal{

//     eats (){
//         super.eat()
//         console.log(this.name + ' eats fishes ')
//     }
        
// }
// let ani = new Alligator('  murphy')
// ani.eats()