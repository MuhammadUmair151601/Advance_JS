// promises in javascript keeps the flow of the asynchronous js as js is single threaded and it avoids the callback hell keeps the code fast easy to read and debug easily.it helps you avoid blocking the main thread. promises are like containers for the storing of the future value:

// There are three conditions for promises:
// pending
// fulfilled if fulfilled then()
// reject if rejected catch()


// First example problem:
// let success = false;
// let prom = new Promise(function(resolve,reject){
//   if(success){
//     resolve("i am passed")
//   }
//   else{
//     reject("i am failed")
//   }
// });
// console.log(prom)

// function prom(complete){
//   return new Promise(function(resolve,reject){
//   if(complete){
//     resolve("i am passed")
//   }
//   else{
//     reject("i am failed")
//   }
// });
// }
// let onfulfilment = (result) =>{
//   console.log(result)
// }
// let onRejection=(error)=>{
//   console.log(error)
// }
// prom(false).then(onfulfilment);
// prom(false).then(onRejection)
