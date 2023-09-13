/**
3. Handle multiple successful promises
In this file, import uploadPhoto and createUser from utils.js

Knowing that the functions in utils.js return promises,
use the prototype below to collectively resolve all promises
and log ''body firstName lastName'' to the console.

function handleProfileSignup()

In the event of an error, log ''Signup system offline'' to the console
*/

import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  // Use Promise.all to handle multiple promises
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      // Destructure the resolved values
      const [photo, user] = values;

      // Log the required information
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // Log an error message in case of failure
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
