var mostWordsFound = function (sentences) {
  let max = 0;
  let min = 0;
  for (let i = 0; i < sentences.length; i++) {
    min = sentences[i].split(" ").length;
    if (min > max) {
      max = min;
    }
  }

  return max;
};
