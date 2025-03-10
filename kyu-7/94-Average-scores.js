// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.

const average = (scores) => {
  const total = scores.reduce((acc, score) => acc + score, 0);

  return Math.round(total / scores.length);
};

console.log(average([1, 2, 3, 4, 5]));
