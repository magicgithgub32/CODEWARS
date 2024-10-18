// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = (text) => {
  let words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      let array = word.split("");

      array[0] = word.charCodeAt(0).toString();

      if (word.length > 2) {
        array[1] = word[word.length - 1];
        array[word.length - 1] = word[1];
      }

      words[i] = array.join("");
    }
  }

  return words.join(" ");
};

console.log(encryptThis("A wise old owl lived in an oak"));
