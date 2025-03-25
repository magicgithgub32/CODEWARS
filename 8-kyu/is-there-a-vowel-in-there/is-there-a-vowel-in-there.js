function isVow(a){
  let object = {
    a: 97,
    e: 101,
    i: 105,
    o: 111,
    u: 117
  }
  
  let numVowels = [97,101, 105, 111, 117]
  
  
  for (let i = 0; i < a.length; i++) {
    if (numVowels.includes(a[i])) {
      a[i] = a[i] == 97 ? 'a' : a[i] == 101 ? 'e' : a[i] == 105 ? 'i' : a[i] == 111? 'o' : a[i] == 117 ? 'u' : ''
    }
  }
  
  return a
}