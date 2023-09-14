/**
9. Throw an error
Write a function named 'guardrail' that will accept one argument
- mathFunction (Function).

This function should create and return an array named 'queue'.

When the 'mathFunction' function is executed,
the value returned by the function should be appended to the queue.

If this function throws an error,
the error message should be appended to the queue.

In every case, the message ''Guardrail was processed''
should be added to the queue.

Example:
[
  1000,
  'Guardrail was processed',
]
*/

export default function guardrail(mathFunction) {
  // Initialize an empty array named 'queue'
  const queue = [];

  // Use try/catch to execute mathFunction and handle errors
  try {
    // Execute the function and store the result
    const result = mathFunction();
    // Append the result to the queue
    queue.push(result);
  } catch (error) {
    // If an error occurs, append the error message to the queue
    queue.push(`Error: ${error.message}`);

  }

  // In every case, append the message 'Guardrail was processed' to the queue
  queue.push('Guardrail was processed');

  // Return the queue array
  return queue;
}
