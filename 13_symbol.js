// like other data types symbol() is also a data type and we use it when we want to producce a unique value in the code:

// const X = Symbol("hello")
// console.log(X);

// let id1 = Symbol("hello");
// let id2 = Symbol("hello");

// console.log(id1==id2);
// this will give us a false value as both are unique in itself:

// using symbol in object:
// let age = Symbol()
// let user = {
//   name : "ali",
//   [age]: 21
// }
// console.log(user);

// symbol in alert:
// let X = Symbol("Hello everyone");
// alert(X.toString())
// console.log(X.description)