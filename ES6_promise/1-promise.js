/*
1. Don't make a promise...if you know you can't keep it
Using the prototype below, return a promise.
The parameter is a boolean.
getFullResponseFromAPI(success)

When the argument is:

    true
        resolve the promise by passing an object with 2 attributes:
            status: 200
            body: 'Success'
    false
        reject the promise with an error object with the message
        ''The fake API is not working currently''
*/
