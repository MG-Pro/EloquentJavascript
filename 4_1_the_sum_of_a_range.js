function range(start, end, step = 1) {
  const arr = [];

  if(step > 0) {
    for(let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for(let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }


  return arr;
}

function sum(arr) {
  return arr.reduce((item, acc) => {
    return item + acc
  })
}

console.log(sum(range(5, 1, -1)));
