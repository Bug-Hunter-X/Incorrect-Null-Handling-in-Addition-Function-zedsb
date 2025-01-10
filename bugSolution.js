function foo(a, b) {
  if (a === null && b === null) {
    return 0;
  } else if (a === null || b === null) {
    return NaN; //or throw an error
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: 0