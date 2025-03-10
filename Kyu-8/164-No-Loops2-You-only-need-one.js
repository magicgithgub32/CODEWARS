// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a, x) {
  if (a.includes(x)) {
    return true;
  } else return false;
}

console.log(check(["t", "e", "s", "t"], "e"));
console.log(check(["t", "e", "s", "t"], "e"));
console.log(check([1, 2, 3, 4], 5));
console.log(check(["t", "e", "s", "t"], "T"));
console.log(check(["t", "e", "s", "t"], "t"));
console.log(check([1, 2, 3, 4], 3));
console.log(check(["what", "a", "great", "kata"], "kat"));
