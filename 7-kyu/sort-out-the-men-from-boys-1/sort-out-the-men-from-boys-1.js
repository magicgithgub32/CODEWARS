function menFromBoys(arr){
  let oddsArr=[]
  let evenArr = []
  
  for (let digit of arr) {
    if(digit % 2 == 0 && !evenArr.includes(digit)) {
      evenArr.push(digit)
    } else if (digit % 2 !== 0 && !oddsArr.includes(digit)) {
      oddsArr.push(digit)
    }
  }
  
  oddsArr.sort(function(a,b){return b-a})
  evenArr.sort(function(a,b){return a-b})
​
  let joinedArr = evenArr.concat(oddsArr)
  
  return joinedArr
}