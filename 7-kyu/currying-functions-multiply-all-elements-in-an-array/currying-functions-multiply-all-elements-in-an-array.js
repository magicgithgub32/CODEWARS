function multiplyAll(arr) {
  return function multiply(n) {
    return arr.map((digit) => digit * n);
  };
}