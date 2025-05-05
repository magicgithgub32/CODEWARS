function SeriesSum(n) {
  let sum = 1
  let dens = 1
  if (n == 0) {
    return "0.00"
  } else {
    for (let i =4; dens < n; i+=3) {
      sum+= 1/i;
      dens++
    }
    let fixed = sum.toFixed(2)
    return fixed.toString()
  }
}