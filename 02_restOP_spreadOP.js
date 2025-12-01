// Rest operator is used when we have more than two arguments for operation denoted by ...args:
// Example:
    function sum(a,b,c,d,e){
     let total = 0;
     for (let i in arguments){
      total += arguments[i];
     }
     console.log(total);
}
sum(1,2,3,4,5);

// Now if we have

// if we have only number arguments for addition:
// function sum(a,b,c){
//       let total = 0;
//       for (let i in arguments){
//         total+=arguments[i];
//       }
//       console.log(total)
//     }
//     sum(23,23,23);
// // Now if we have a string in the same case:
// function result(name,...args){
//   let sum = 0;
//   for(let i in args){
//     sum += args[i];
//   }
//   console.log(`Hello ${name}: Your total is ${sum}`)
// }
// result("ali",21,12,12,12,1,2,12)
// result("Akbar",21,12,12,12,1,2,12)

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, rollNo) {
    super(name); // calls Person constructor
    this.rollNo = rollNo;
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

const student1 = new Student("Ali", 123);
student1.greet(); // inherited method
student1.study(); // child method
