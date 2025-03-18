// write the function isAnagram
var isAnagram = function(test, original) {
  let strSorted = test.toLowerCase().split("").sort().join("")
  let str2Sorted = original.toLowerCase().split("").sort().join("")
  
  return strSorted === str2Sorted ? true : false
};
​