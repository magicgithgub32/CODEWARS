function isIsogram(str){
  
  if (!str.length) {
    return true
  } else {
    let arr = str.toLowerCase().split("")
    let newArr = []
    
    
    for (let i = 0; i < arr.length; i++) {
      
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i])
      }
    }
      return newArr.length == arr.length ? true : false
​
  }
  
}