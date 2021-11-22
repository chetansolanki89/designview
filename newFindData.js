const findData = (str, subStr) => {
  const arrStrr = str.split(" ");
  return arrStrr.indexOf(subStr) !== -1;
};

console.log(findData("I belong to Pune city.", "Pune"));
console.log(findData("I am Indian and from Nanded", "Nanded"));
console.log(findData("I am Indian and from Mumbai", "Pune"));
