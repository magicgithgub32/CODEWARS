function vowelIndices(word){
  
  const vowels = ["a", "e", "i", "o", "u", "y"]
  
  let arrIndex = []
  
  let arr = word.toLowerCase().split("")
  
  for (let i = 0; i<arr.length; i++) {
    if(vowels.includes(arr[i])) {
      arrIndex.push(i)
    }
  }
  const realIndex = arrIndex.map((item) => item+1)
  return realIndex
}