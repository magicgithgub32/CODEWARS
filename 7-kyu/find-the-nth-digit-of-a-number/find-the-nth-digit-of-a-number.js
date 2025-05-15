function findDigit(num, nth) {
  
  
  
  if (nth <= 0) {
    return -1
  } else {
    let absNum = Math.abs(num)
  
  let str = absNum.toString()
   
  let arr = str.split("")
  let arrRev = arr.reverse()
  
  if(nth > arr.length) {
    return 0
  } else {
    
    let pos = nth - 1
    
      return Number(arrRev[pos]) 
    }
  
​
    
  }
  
  
}