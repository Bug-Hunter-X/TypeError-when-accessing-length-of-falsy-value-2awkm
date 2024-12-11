function foo(x) {
  if (x === null || typeof x !== 'object' || x === undefined || x.length === undefined) {
    return 0; // Handle null, undefined, and non-objects
  }
  return x.length; 
}
//Additional handling can include throwing an error for unexpected types.