function factorial(n)
{
  let sum= 1
  let newArr = []
 
  if (n < 0 || n > 12) {
    throw RangeError 
  }
  
  
 while (n >0) {
   newArr.push(n)
   n--
   
 }
  for (let i = 0; i<newArr.length; i++) {
    sum *= newArr[i]
  }
  return sum
}