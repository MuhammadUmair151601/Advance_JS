// Rest operator is used when we have more than two arguments for operation denoted by ...args:
// Example:
//     function sum(a,b,c,d,e){
//      let total = 0;
//      for (let i in arguments){
//       total += arguments[i];
//      }
//      console.log(total);
// }
// sum(1,2,3,4,5);

// Now if we have a string alongside the numbers then:
// function result(name, ...args){
//   total = 0;
//   for(let i in args){
//     total += args[i];
//   }
//   console.log(`hello ${name} your result is ${total}%`)
// }
// result("ahmed", 12,12,12,12,12,12,1,2)


// Spread operator is used when we want to do operation on arrays:
// Example:
// function result(name,...args){
//   total = 0;
//   for(let i in args){
//     total+=args[i];
//   }  
//   console.log(`hello ${name} your marks are ${total}`);
// }
// let arr = [1,2,3,4,5,6,7,7,8]
// result("ahad",...arr)
// same method as rest op but only arrays involved before function values calling: