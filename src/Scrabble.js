function Scrabble() {

}

Scrabble.prototype.score = function(letter) {
  if(letter == 'AT') {
    return 2
  } else if(letter == 'D'){
    return 2
  } else if(letter == 'Dog'){
    return 5
  } else {
  return 1;
  }
}
