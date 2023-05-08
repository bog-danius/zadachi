var finalValueAfterOperations = function (operations) {
  var X = 0;
  for (i = 0; i < operations.length; i++) {
    if (operations[i] === "--X" || operations[i] === "X--") {
      X -= 1;
    } else if (operations[i] === "X++" || operations[i] === "++X") {
      X += 1;
    }
  }
  return X;
};
