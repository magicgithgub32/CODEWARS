"use strict";
​
function flattenAndSort(array) {
  let newArr = []
  
  for (let i = 0; i< array.length; i++) {
    
    newArr = newArr.concat(array[i])
    
  }
  
  let sortedArr = newArr.sort(function(a, b){return a - b})
  
  return sortedArr;
}