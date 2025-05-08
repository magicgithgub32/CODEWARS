function pointsPer48(ppg, mpg) {
if (ppg == 0 || mpg == 0) {
  return 0
} else {
  let norm = 48 / mpg
  let string = (ppg * norm).toFixed(1)
  return Number(string)
}
}