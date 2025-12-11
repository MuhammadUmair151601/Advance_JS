// Ajax means Asynchronous javascript and XML:
// Used for creating dynamic and fast websites.
// means if we send a request to server the request will be sent without interrupting other components of UI and website.
// With modern JavaScript, AJAX = fetch() + async/await.

// Example:
// async function getUsers() {
//   try {
//     const res = await fetch("https://api.example.com/users");

//     if (!res.ok) throw new Error("Failed to fetch");

//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// getUsers();
// AJAX with error handling: