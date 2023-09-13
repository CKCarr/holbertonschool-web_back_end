/*
Return a Promise using this prototype function getResponseFromAPI()
*/

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate some condition or asynchronous operation
    const condition = true;  // This is just a placeholder

    if (condition) {
      resolve("Data received!");  // Resolve the Promise
    } else {
      reject(new Error("Failed to get data"));  // Reject the Promise
    }
  });
}

export default getResponseFromAPI;
