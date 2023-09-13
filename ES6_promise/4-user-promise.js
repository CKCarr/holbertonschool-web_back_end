/*
Simple promise
Using the following prototype
function signUpUser(firstName, lastName) {
}
That returns a resolved promise with this object:
{
  firstName: value,
  lastName: value,
}
*/

function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve({ firstName, lastName });
  });
}

export default signUpUser;
