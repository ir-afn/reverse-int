module.exports = function reverse (n) {
  let num = Math.abs(n);
  let str = num.toString();
  let result = '';

  if (Math.floor(num / 10) === num / 10) {
    for (let i = str.length - 2; i >= 0; i -= 1) {
      result += str[i];
    }
  } else {
    for (let i = str.length - 1; i >= 0; i -= 1) {
      result += str[i];
    }
  }
  return result * 1;
}
