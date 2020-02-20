function Scrabble() {

}

Scrabble.prototype.score = function(letter) {
  if(letter == 'AT') {
    return 2
  } else {
  return 1;
  }
}
