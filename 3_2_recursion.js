function isEven (num) {
  num = num > 0 ? num : num * - 1;
  const res = num - 2;
  if (res === 0) {
    return true;
  } else if(res === 1) {
    return false
  } else {
    return isEven(res);
  }

}

console.log(isEven(-9));
