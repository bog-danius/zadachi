function skobki(str) {
  let a = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      a.push(str[i]);
    } else {
      if (str[i] === ")") {
        if (a.length === 0) {
          return false;
        } else {
          let last = a.pop();

          if ( last !== "(") {
            return false
          }
        }
      }
    }
  }

  return a.length === 0;
}
console.log(skobki("(1 + 5)"));
