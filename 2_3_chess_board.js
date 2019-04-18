function chess_board(size) {
  let line = '';
  for (let i = 1; i <= size; i++) {
    for (let a = 1; a <= size; a++) {
      if(i % 2 !== 0) {
        line += (a % 2 === 0) ? ' ' : '#';
      } else {
        line += (a % 2 === 0) ? '#' : ' ';
      }
    }
    console.log(line);
    line = '';
  }
}

chess_board(8);
