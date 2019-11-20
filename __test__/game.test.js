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



  test('checkLetter() should correctly see if a letter is NOT in the answer', () => {
    expect(newGame.checkLetter("Z")).toEqual(false);
  });
  test('checkLetter() should increment wrongAttempts if the letter is not in the word', () => {
    newGame.checkLetter("Z");
    expect(newGame.wrongAttempts).toEqual(1);
  });
  test('checkLetter() should NOT increment wrongAttempts if the letter is in the word', () => {
    newGame.checkLetter("T");
    expect(newGame.wrongAttempts).toEqual(0);
  });
  test('checkLetter() should correctly see if a letter is in the answer even if lowercase', () => {
    expect(newGame.checkLetter("t")).toEqual(true);
  });
  test('checkLetter() should correctly see if a letter is in the answer', () => {
    expect(newGame.checkLetter("T")).toEqual(true);
  });
  test('checkLetter() should correctly replace one "_" in currentArray with the letter', () => {
    newGame.checkLetter("E");
    expect(newGame.currentArray).toEqual(["_","E","_","_","_","_","_","_","_","_","_"]);
  });
  test('checkLetter() should correctly replace multiple letters in currentArray with the letter', () => {
    newGame.checkLetter("T");
    expect(newGame.currentArray).toEqual(["T","_","_","T","_","_","_","_","_","_","_"]);
  });


  test('getArray() should return currentArray', () => {
    expect(newGame.getArray()).toEqual(["_","_","_","_","_","_","_","_","_","_","_"]);
  });


  test('winCheck() should return true if the two arrays match', () => {
    newGame.answerArray = ["H","I"];
    newGame.currentArray = ["H","I"];
    expect(newGame.winCheck()).toEqual(true);
  });
  test('winCheck() should return false if the two arrays DONT match', () => {
    newGame.answerArray = ["H","I"];
    newGame.currentArray = ["B","Y", "E"];
    expect(newGame.winCheck()).toEqual(false);
  });


  test('getUsedLetters should return letter array', () => {
    newGame.letterArray = ["H", "E", "Y"];
    expect(newGame.getUsedLetters()).toEqual(["H", "E", "Y"]);
  });



});
