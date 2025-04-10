function evenNumbers(array, number) {
  
  let evens = []
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      evens.push(array[i])
    }
  }
  
  let result = evens.slice(evens.length - number)
  
  return result
}