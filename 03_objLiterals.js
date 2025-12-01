// object literals are used when we want to put a variable inside an object:
// Example:
// let name = "m.umair"
// let age = 21
// let course = "BSIT"
// let details = {
//   name,
//   age,
//   course
// }
// console.log(details);

// similarly we can also use the method like:
// let n = name;
// let a = age;
// let c = course;
// let obj = {
//   [n] : "Ali",
//   [a] : 23,
//   [c] : "BSIT"
// }
// console.log(obj)

// let name = "ali";
// let age = 45;
// let course = "BSSE"
// let obj = {
//   name,
//   age,
//   course,
//   detail : function(){
//     return(`HEllo ${name} your course is ${course}`)
//   }

// }
// console.log(obj.detail())