function accum(s) {
  let array = s.split("")
  let newArr = []
  
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i].toUpperCase())
    let letter = array[i]
    
    if (i > 0) {
    newArr.push(letter.toLowerCase().repeat(i))
      }
    
    if (i !== array.length - 1) {
      newArr.push("-")
    }
  }
​
  
  
    return newArr.join("");
}