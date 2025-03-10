// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = (text) => {
  if (text.length === 0) {
    return [];
  } else {
    const arrayCount = text.split("");
    const arrayOfChars = [];
    for (let i = 0; i < arrayCount.length; i++) {
      if (arrayCount.hasOwnProperty(arrayCount[i])) {
        arrayCount[arrayCount[i]]++;
      } else {
        arrayCount[arrayCount[i]] = 1;
        arrayOfChars.push(arrayCount[i]);
      }
    }
    const result = arrayOfChars.map((char) => [char, arrayCount[char]]);
    return result.sort((a, b) => b[1] - a[1]);
  }
};

console.log(orderedCount("abracadabra"));
