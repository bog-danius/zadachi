var balancedStringSplit = function (s) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      count1 += 1;
    } else {
      count1 -= 1;
    }

    if (count1 === 0) {
      count2 += 1;
    }
  }

  return count2;
};
