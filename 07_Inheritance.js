// class Student {
//   constructor(name, age, city,salary) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.salary = salary;
//   }
// }
// class specialStudent extends Student{
//     constructor(name,age,city,salary,total){
//       super(name, age, city,salary)
//       this.total = salary + 5000;
//     }
// }

// const student1 = new Student("ali",23,"peshawar",25000)
// const student2 = new specialStudent("alam",24,"islamabad",25000,5000)

// document.write(`<h3>Normal Student:</h3> ${JSON.stringify(student1)} <br>`);
// document.write(`<h3>Special Student:</h3> ${JSON.stringify(student2)} <br>`);


// #problem #2
// class employee{
//   constructor(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
// }
// class Manager extends employee{
//   constructor(name,age,salary,Ta,Ma,total){
//     super(name,age,salary)
//     this.Ta = 5000;
//     this.Ma = 4000;
//     this.total = salary + Ta + Ma;
//   }
// }

// const emp = new employee("ali",34,25000)
// const man = new Manager("ahmed",33,25000,3404,3404)

// document.write(`<h1>employee salary:</h1> ${JSON.stringify(emp)}`)
// document.write(`<h1>manager salary:</h1> ${JSON.stringify(man)}`)