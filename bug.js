function foo(x) {
  if (x === null) {
    return 0; // Handle null
  }
  return x.length; // Error if x is not an object with length
}