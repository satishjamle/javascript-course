// Method overriding : with a construcor things are a bit triky/ different according t the specification , if a class extend anotger class and has no consrtuctor then the folowing empty constructor  is generated

// class Employee {
//   login() {
//     console.log(`Employee has logged in`);
//   }
//   logout() {
//     console.log(`Employee has logged out `);
//   }

//   requestleaves(leaves) {
//     console.log(`Employee has requested ${leaves} leaves`);
//   }
// }

// class Programmer extends Employee {
//   requestCoffe(x) {
//     console.log(`Employee requested ${x}  coffees `);
//   }

//   requestleaves(leaves) {
//     console.log(`Employee has requested ${leaves + 1} leaves (one extra)`);
//   }
// }

// let e = new Employee(); // Programmer ()
// let p = new Programmer();

// e.login();
// e.logout();
// e.requestleaves(4);

// p.requestCoffe(2);
// p.requestleaves(5);

// Super Keyword : prents class me kuch change kre tho child class me apne aap change ho jata h super key method ke help se

// class Employee {
//     login() {
//       console.log(`Employee has logged in`);
//     }
//     logout() {
//       console.log(`Employee has logged out `);
//     }

//     requestleaves(leaves) {
//       console.log(`Employee has requested ${leaves} leaves  --Auto approved`);
//     }
//   }

//   class Programmer extends Employee {
//     requestCoffe(x) {
//       console.log(`Employee requested ${x}  coffees `);
//     }

//     requestleaves(leaves) {
//         super.requestleaves(7)
//         console.log(`two extra is granted`)   // modify auto approve E class se P class me
// }
//   }

//   let e = new Employee(); // Programmer ()
//   let p = new Programmer();

//   e.login();
//   e.logout();
//   e.requestleaves(4);

//   p.requestCoffe(2);
//   p.requestleaves(5);

//  aap ne first class me constructor create kiya   or second class me nhi kiya  tho  super keyword he help se javascript  engine  atomatically create kr deta h

//   constructor (...args){
//     super(...args)
//   }
// construcor  --- if there is no constructor in the child this is created automatically super(...args)

// class Employee {
//   constructor(name) {
//     console.log(`  ${name} Employee's constructor is here`);
//     this.name = name;
//   }

//   requestleaves(leaves) {
//     console.log(`Employee has requested ${leaves} leaves  --Auto approved`);
//   }
// }

// class Programmer extends Employee {
//   requestCoffe(x) {
//     console.log(`Employee requested ${x}  coffees `);
//   }
// }

// let e = new Employee("satish");
// let p = new Programmer("vijay");

// p.requestleaves(5);

// p.requestCoffe(2);

// but costrucotrs ka use kiya tho  super key word ko this se phle use krna padega nhi tho error dega

// overriding constructor

// class Employee {
//   constructor(name) {
//     console.log(`  ${name} Employee's constructor is here`);
//     this.name = name;
//   }
// }

// class Programmer extends Employee {
//   constructor(name) {
//     super(name)
//     console.log(`This is a newly written constructor `);
//   }
//   requestCoffe(x) {
//     console.log(`Employee requested ${x}  coffees `);
//   }
// }

// let e = new Employee("satish");
// let p = new Programmer("vijay");

// p.requestCoffe(2);
