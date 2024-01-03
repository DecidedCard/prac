function list(string, n) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    string[i] = string[i][n] + string[i];
  }
  string.sort();

  for (let j = 0; j < string.length; j++) {
    string[j] = string[j].replace(string[j][0], '');
    result.push(string[j]);
  }
  return result;
}

console.log(list(["abce", "abcd", "cdx"], 2));