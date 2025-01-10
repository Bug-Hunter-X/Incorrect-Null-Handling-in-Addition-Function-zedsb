# Incorrect Null Handling in Addition Function

This repository demonstrates a common error in JavaScript: incorrect handling of null values in a function. The function `foo` is designed to add two numbers, but its current implementation always returns 0 if either input is null.  This behavior is likely unintended and produces incorrect results when one input is null and the other is a number.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file presents a corrected version.

This example highlights the importance of carefully considering edge cases, such as null inputs, when writing functions.