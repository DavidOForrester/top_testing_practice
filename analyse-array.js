function analyseArray(arr) {
  let length = arr.length;
  let max = null
  let min = arr[0];
  let average = null;
  let total = 0

  for (let i = 1; i < length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 1; i < length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  for (let i = 0; i < length; i++) {
    total += arr[i]
  }

  average = total / length

  const object = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  return object;
}

module.exports = analyseArray;
