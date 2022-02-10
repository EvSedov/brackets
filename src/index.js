module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0) {
    return false;
  }
  let result = [];
  for(const bracket of str) {
    let currentElement;
    bracketsConfig.forEach((element) => {
      if (element.includes(bracket)) {
        currentElement = element;
      }
    });
    if(result[result.length -1] == currentElement[0] && currentElement.lastIndexOf(bracket) == 1) {
      result.pop();
      continue;
    }
    if(currentElement.indexOf(bracket) == 0) {
      result.push(bracket);
    }
  }
  return result.length == 0;
};
