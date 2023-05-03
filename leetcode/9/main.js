var isPalindrome = function (x) {
  if (x === 0) {
    return true;
  } else {
    let reverse = x.toString().split("").reverse().join("");
    if (x == reverse) {
      return true;
    } else {
      return false;
    }
  }
};
