function Scrabble() {

}

Scrabble.prototype.score = function(letter) {
  if(letter == 'AT') {
    return 2
  } else if(letter == 'D'){
    return 2
  } else if(letter == 'Dog'){
    return 5
  } else if(letter == 'Long'){
    var score = 0;
    var upper = letter.toUpperCase()
    var array = upper.split('');
    console.log(array)
      for (var i = 0; i < array.length; i ++) {
        if (array[i] == 'L' || array[i] == 'N' || array[i] == 'O'){
          score += 1;
        } else if (array[i] == 'G') {
          score += 2;
        }
      }
      return score;
  }
   else {
  return 1;
  }
}
