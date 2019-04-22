function arrayToList(arr) {
  return !arr.length ? null :
    {
      value: arr[0],
      rest: arrayToList(arr.slice(1))
    };
}

function listToArray(list) {
  const  arr = [];
  for(let node = list; node; node = node.rest) {
    arr.push(node.value)
  }
  return arr;
}

function prepend(elem, list) {
    return {
      value: elem,
      rest: list
    }
}

function nth(list, pos) {
  if (!list)
    return undefined;
  else if (pos === 0)
    return list.value;
  else
    return nth(list.rest, pos - 1);
}

console.log(arrayToList([10, 20, 30]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));
