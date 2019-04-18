function countChar(str, sym) {
  let count = 0;

  for (let i = 0; i <= str.length; i++) {
    if(str.charAt(i) === sym) {
      count++;
    }
  }
  return count;
}

function countBs(str) {
  return countChar(str, 'k')
}

console.log(countBs('BkBkCkB'));
