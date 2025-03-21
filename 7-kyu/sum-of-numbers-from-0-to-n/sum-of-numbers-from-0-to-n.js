var SequenceSum = (function() {
  function SequenceSum() {}
​
  SequenceSum.showSequence = function(count) {
    if (count < 0) {
      return `${count}<0`
    } else if (count == 0) {
      return '0=0'
    }
    let result = 0
    let arr = []
   for (let i = 0; i <= count; i++) {
     result += i
     arr.push(i)
   }
    let series = arr.join("+")
    return `${series} = ${result}`
      
  };
​
  return SequenceSum;
​
})();