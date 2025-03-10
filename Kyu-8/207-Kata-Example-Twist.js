// Add the value "codewars" to the array websites 1,000 times.

const addCodewars = () => {
  var websites = [];
  let num = 0;

  while (num < 1001) {
    websites.push("codewars");
    num++;
  }
  return websites;
};

console.log(addCodewars());
