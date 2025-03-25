function array(string) {
  let arr = string.split(",")
​
  
  if (arr.length > 2) {
​
  arr.shift()
  arr.pop()
     
  return arr.join(" ")
} else {
  return null
} 
}