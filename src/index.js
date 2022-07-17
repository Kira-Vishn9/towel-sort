module.exports = function towelSort (matrix) {
  if(arguments.length == 0) {
    return [];
  }

  const result = [];

  matrix.forEach((arr, index) => {
    if(index % 2 == 0) {
      result.push(...arr);
    } else {
      result.push(...arr.reverse());
    }
    
  });

  return result;
}