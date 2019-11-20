export class Game{
  constructor(dinoWord){
    this.dinoWord = dinoWord;
    // Maybe reverse this? so it adds up and if you get a certain number wrong it fails you
    this.triesLeft = 6;
    this.wrongAttempts = 0;
  }
  makeArrays (){
    this.dinoWord = this.dinoWord.toUpperCase();
    this.answerArray = this.dinoWord.split("");
    this.letterArray = [];
    this.currentArray = this.answerArray.map(function(letter){
      return letter = "_";
    });
  }
  checkLetter(letter){
    // Make a check to see if it is a valid letter AND not in letter array
    let regex = /^[A-Za-z]+$/;
    if (letter.match(regex) && letter.length >= 1 && !this.letterArray.includes(letter)){
      this.letterArray.push(letter);
      letter = letter.toUpperCase();

      // Check the dinoWord for the letter
      if(this.answerArray.includes(letter)){
        for (let i = 0; i < this.answerArray.length; i++){
          if (this.answerArray[i] === letter){
            this.currentArray[i] = letter;
          }
        }
        return true;
      }
      else{
        this.wrongAttempts++;
        return false;
      }
    } else {
      return false;
    }
  }
  getArray(){
    return this.currentArray;
  }
  getUsedLetters(){
    return this.letterArray;
  }
  loseCheck(){
    if(this.wrongAttempts === 6){
      return true;
    }
    else {
      return false;
    }
  }
  winCheck(){
    let answerString = this.answerArray.toString();
    let currentString = this.currentArray.toString();

    if(answerString === currentString) {
      return true;
    }
    else {
      return false;
    }
  }
  returnWord(){
    let returnString = this.dinoWord.toLowerCase();
    return returnString.charAt(0).toUpperCase() + returnString.slice(1);
  }

}
