function evil(n) {
​
let binaryNum = n.toString(2)
​
let numOfOnes = 0
​
let binaryNumArr = binaryNum.split("")
​
for (let i = 0; i< binaryNumArr.length; i++) {
  if (binaryNumArr[i] == '1') {
    numOfOnes ++
  }
​
}
    return numOfOnes % 2 == 0 ? "It's Evil!" : "It's Odious!"
​
}