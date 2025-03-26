function position(letter){
  
  let position
 
  const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
​
for (let char of alphabet) {
  if (char == letter) {
     position = alphabet.indexOf(char) + 1
  }
}
  
  return `Position of alphabet: ${position}`
  
  
  }