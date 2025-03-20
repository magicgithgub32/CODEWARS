function sumOfMinimums(arr) {
  let sum = 0
 for (let ar of arr) {
   ar.sort(function(a, b){return a - b})
   
   sum += ar[0]
 }
  return sum
}