// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

const reverse = (str) => {
  if (str.trim() === "") {
    return "";
  }
  let array = str.split(" ");
  let arrayForReverse = [];

  if (!array.length > 1) {
    return str;
  } else {
    for (let i = 1; i < array.length; i += 2) {
      array[i] = array[i].split("").reverse().join("");
    }
  }
  return array.join(" ");
};

console.log(reverse("Reverse this string, please!"));
