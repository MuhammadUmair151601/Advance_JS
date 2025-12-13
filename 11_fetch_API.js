// fetch method is used in place of AJAX and Jquery method because its easy to understand and fast method:
// syntax
// fetch(URL/filename)
// .then(promise)
// .then(function(result))

// Example: if we want to fetch the studentdata from studentdata.json file we will use fetch:

// fetch("./studentdata.json")
// .then((response)=>{
//   return response.json();
// })
// .then(function(result){
//   console.log(result)
// })
// .catch((err)=>{
//   console.log("Error loading data")
// })