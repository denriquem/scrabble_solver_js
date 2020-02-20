describe("Scrabble", function() {

  var scrabble;

  beforeEach(function() {
    scrabble = new Scrabble();
  });

  it('should return 1 when passed A', function(){
    expect(scrabble.score('A')).toEqual(1);
  });
});
