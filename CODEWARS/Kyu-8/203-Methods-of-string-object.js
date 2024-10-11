// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// For example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

function splitAndMerge(string, separator) {
  // Split the string into words
  let words = string.split(" ");

  // Process each word
  let processedWords = words.map((word) => {
    // Split each word into characters, join them with the separator
    return word.split("").join(separator);
  });

  // Join all the processed words back into a sentence with spaces
  return processedWords.join(" ");
}

console.log(splitAndMerge("My name is John", " "));
