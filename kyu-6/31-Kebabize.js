// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

const kebabize = (str) => {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase()) {
      if (result.length > 0) {
        result.push("-");
      }
      result.push(char.toLowerCase());
    } else {
      result.push(char);
    }
  }

  return result.join("");
};

console.log(kebabize("camelHasThreeHumps"));
