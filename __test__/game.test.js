import { Game } from './../src/game.js';

describe('Game', () => {
  // jest.useFakeTimers();
  let newGame;

  beforeEach(function() {
    newGame = new Game("Testasaurus");
    newGame.makeArrays();
  });

  afterEach(function() {
    // jest.clearAllTimers();
  });

  test('should create an answerArray with dinoword: Testasaurus', () => {
    expect(newGame.answerArray).toEqual(["T","E","S","T","A","S","A","U","R","U","S"]);
  });
  test('should create an currentArray the same size as AnswerArray with _ chars. (11 _s)', () => {
    expect(newGame.currentArray).toEqual(["_","_","_","_","_","_","_","_","_","_","_"]);
  });

  test('should correctly detect a non-alpha character', () => {
    expect(newGame.checkLetter("$")).toEqual(false);
  });
  test('should correctly detect a string longer than 1 character', () => {
    expect(newGame.checkLetter("Zoo")).toEqual(false);
  });



  test('should correctly see if a letter is NOT in the answer', () => {
    expect(newGame.checkLetter("Z")).toEqual(false);
  });
  test('should correctly see if a letter is in the answer even if lowercase', () => {
    expect(newGame.checkLetter("t")).toEqual(true);
  });
  test('should correctly see if a letter is in the answer', () => {
    expect(newGame.checkLetter("T")).toEqual(true);
  });
  test('should correctly replace one "_" in currentArray with the letter', () => {
    newGame.checkLetter("E");
    expect(newGame.currentArray).toEqual(["_","E","_","_","_","_","_","_","_","_","_"]);
  });
  test('should correctly replace multiple letters in currentArray with the letter', () => {
    newGame.checkLetter("T");
    expect(newGame.currentArray).toEqual(["T","_","_","T","_","_","_","_","_","_","_"]);
  });
  test('getArray() should return currentArray', () => {
    expect(newGame.getArray()).toEqual(["_","_","_","_","_","_","_","_","_","_","_"]);
  });




  test('getUsedLetters should return letter array', () => {
    newGame.letterArray = ["H", "E", "Y"];
    expect(newGame.getUsedLetters()).toEqual(["H", "E", "Y"]);
  });
  test('should correctly decrement triesLeft when checkLetter is called', () => {
    newGame.checkLetter("T");
    expect(newGame.triesLeft).toEqual(13);
  });
  test('loseCheck() should return true if you are out of tries', () => {
    newGame.triesLeft = 0;
    expect(newGame.loseCheck()).toEqual(true);
  });
  test('loseCheck() should return false if you have tries left', () => {
    newGame.triesLeft = 5;
    expect(newGame.loseCheck()).toEqual(false);
  });


});
