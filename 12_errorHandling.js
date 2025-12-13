// Error handling is used when we want to fetch an API so we use error handler at the end instead of repeating the error detector again and again:

const fetchStudents = async ()=>{
  try{
    const response = await fetch("./studentdata.json");
    if(!response.ok){
      throw new Error("failed to fetch data")
    }
    const data = await response.json();
    console.log(data);
  }
  catch(error){
    console.log("error loading data", error.message)
  }
}
fetchStudents();