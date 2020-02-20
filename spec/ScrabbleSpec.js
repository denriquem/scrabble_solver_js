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

  it('should retunr 2 when passed AT', function(){
    expect(scrabble.score('AT')).toEqual(2);
  });
});
