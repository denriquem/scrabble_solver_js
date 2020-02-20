describe("Scrabble", function() {

  var scrabble;

  beforeEach(function() {
    scrabble = new Scrabble();
  });

  it('should return 1 when passed A', function(){
    expect(scrabble.score('A')).toEqual(1);
  });

  it('should return 1 when passed T', function(){
    expect(scrabble.score('T')).toEqual(1);
  });

  it('should return 2 when passed AT', function(){
    expect(scrabble.score('AT')).toEqual(2);
  });

  it('should score 2 when passed D', function(){
    expect(scrabble.score('D')).toEqual(2);
  });

  it('should score correct points for word with 1 and 2 score letters', function(){
    expect(scrabble.score('Dog')).toEqual(5);
  });
});
