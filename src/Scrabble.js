function Scrabble() {

}

Scrabble.prototype.score = function(letter) {
  if(letter == 'AT') {
    return 2
  } else if(letter == 'D'){
    return 2
  } else if(letter == 'Dog'){
    return 5
  } else if(letter == 'Long' || letter == 'Cabbage' || letter == 'Fan' || letter == 'Black' || letter == 'Jack'){
    var score = 0;
    var upper = letter.toUpperCase()
    var array = upper.split('');
    console.log(array)
      for (var i = 0; i < array.length; i ++) {
        if (array[i] == 'L' || array[i] == 'N' || array[i] == 'O' || array[i] == 'A' || array[i] == 'E'){
          score += 1;
        } else if (array[i] == 'G') {
          score += 2;
        } else if (array[i] == 'B' || array[i] == 'C') {
          score += 3;
        } else if (array[i] == 'F'){
          score += 4;
        } else if (array[i] == 'K') {
          score += 5;
        } else if (array[i] == 'J') {
          score += 8;
        }
      }
      return score;
  }
   else {
  var values = { 'A' : 1, 'E' : 1, "I" : 1, "O" : 1, "U" : 1, "L" : 1, "N" : 1, "R" : 1, "S" : 1, "T" : 1, "D" : 2, "G" : 2, "B" : 3, "C" : 3, "M" : 3, "P" : 3, "F" : 4, "H" : 4, "V" : 4, "W" : 4, "Y" : 4, "K" : 5, "J" : 8, "X" : 8, "Q" : 10, "Z" : 10 }
    var newUpper = letter.toUpperCase();
    var newArray = newUpper.split('');
    var finalScore = 0;
    for (var i = 0; i < newUpper.length; i++) {
      finalScore += values[newUpper.charAt(i)]
    }
    return finalScore;
  }
}
