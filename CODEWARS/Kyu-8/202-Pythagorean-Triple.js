// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

// A Pythagorean Triple consists of arranging 3 integers, such that:

// a2 + b2 = c2

// Examples
// [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

// [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

// [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

// [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2

function isPythagoreanTriple(integers) {
  let firstPow = integers[0] * integers[0];
  let secondPow = integers[1] * integers[1];
  let thirdPow = integers[2] * integers[2];

  return firstPow + secondPow == thirdPow
    ? true
    : firstPow + thirdPow == secondPow
    ? true
    : secondPow + thirdPow == firstPow
    ? true
    : false;
}

/////////////////
// function isPythagoreanTriple(nums) {
//   const [a,b,c] = nums.sort((a,b) => a - b)

//   return a**2 + b**2 === c**2
// }

console.log(isPythagoreanTriple([5, 3, 4]));
