// Javascript runs asynchronously with code to run line by line if line 5 takes time it will wait until it loads data and then it will run line 6.
// if we use async await the line 5 will be loading code will run to the next line and then come back to the await line and load the data. this make the process of the website smooth and reliable.

// Example:
// async function loadstudent (){
//   // declare a function of loadstudent
//   return fetch("studentdata.json")
//   // fetch data from studentdata file
//   .then(response => response.json())
//   // conver the response of the server to json form
//   .then(data => {
//     // show the data in console
//     console.log(data);
//     return data;
//   })
// .catch(error=> console.error("failed to load data",error));
// // if any error found make a statement
// }
// loadstudent();



