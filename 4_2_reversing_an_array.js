function reverseArray (arr) {
  const tempArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    tempArr.push(arr[i]);
  }

  return tempArr;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));

const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
