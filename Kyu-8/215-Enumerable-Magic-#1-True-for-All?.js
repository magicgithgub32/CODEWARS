// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

const all = (arr, fun) => {
  for (let num of arr) {
    if (!fun(num)) {
      return false;
    }
  }
  return true;
};

const greaterThan9 = (num) => num > 9;
const lessThan9 = (num) => num < 9;

console.log(all([10, 20, 30, 40, 50], "greater_than_9"));
