/*
Catch me if you can!
Using the function prototype below

function handleResponseFromAPI(promise)

Append three handlers to the function:

    When the Promise resolves, return an object with the following attributes
        status: 200
        body: success
    When the Promise rejects, return an empty Error object
    For every resolution, log Got a response from the API to the console
*/
function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => new Error())
    .finally(() => { // callback
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
