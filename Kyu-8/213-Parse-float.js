// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

const parseF = (s) => {
  return /\d/.test(s) ? +s : null;
};

console.log(parseF("1"));
