/*
Throw error / try catch
Write a function named divideFunction that will accept two arguments: numerator (Number)
and
denominator (Number).

When the denominator argument is equal to 0, the function should
throw a new error with the message ''cannot divide by 0''.
Otherwise it should return the numerator divided by the denominator.
*/

export default function divideFunction(numerator, denominator) {
  // Validate that both arguments are numbers
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Both numerator and denominator should be numbers');
  }

  // Check if denominator is zero
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  // Perform the division
  return numerator / denominator;
}
