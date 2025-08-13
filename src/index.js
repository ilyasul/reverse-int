module.exports = function reverse(n) {
  let tempN = Math.abs(n);
  let reversed = 0;
  while (tempN > 0) {
    reversed = reversed * 10 + (tempN % 10);
    tempN = Math.floor(tempN / 10);
  }
  if (String(reversed).length < String(n).length) {
    reversed = `0${String(reversed)}`;
  }
  return reversed;
};
