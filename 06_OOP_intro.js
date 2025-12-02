// OOp concept in js is used for making the code reliable and reusable easily:
// it contains classes and objects:
// Class contains the blueprint of the object like the recipe of the code and the object does the implementation of the class

// class contains properties and methods:
// method are used in OOP and there are three types of methods:
// 1:constructor, 2:prototype, 3:static
// constructor:
// it runs directly as the object is called:
// prototype:
// we call it ourself not like constructor:
// static:
// no need to call directly runs:


class Student {
  constructor(name, age, city,salary) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.salary = salary;
  }
}
class specialStudent extends Student{
    constructor(name,age,city,salary,total){
      super(name, age, city,salary)
      this.total = salary + 5000;
    }
}

const student1 = new Student("ali",23,"peshawar",25000)
const student2 = new specialStudent("alam",24,"islamabad",25000,5000)

document.write(`<h3>Normal Student:</h3> ${JSON.stringify(student1)} <br>`);
document.write(`<h3>Special Student:</h3> ${JSON.stringify(student2)} <br>`);
  
  
  
