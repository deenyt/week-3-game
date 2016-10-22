
var wordstring = [
  'penninsula',
  'coconut',
  'dolphin',
  'margararita',
  'beaches',
  'coconut',
  'breezes',
  'sunset',
  'palm',
  'waves'];
var guessingWordString = "";
var currentWordPos = 0;
var wins = 0;
var losses = 0;
var guessesRemain = 15;

function initUnderLnGuessStrg() {
   var str = '_';
   var repeatedstr = str.repeat(wordstring[currentWordPos].length);
   guessingWordString = "";
   guessesRemain = 15;

   return repeatedstr;
}

function getCurrentWordPos () {
  wordstring[currentWordPos];

}

function chgStrToAry(str) {
    var arr = str.split("");
    return arr;
}

function addGuessToGuessString(str,guessedLetter){ 
  var guessedWordArr = chgStrToAry(str);
  var currentWordArr = chgStrToAry(wordstring[currentWordPos]);
  
  /*console.log(str,wordstring[currentWordPos],guessedLetter); */
  for (i = 0; i < wordstring[currentWordPos].length; i++) {

    if (guessedLetter === currentWordArr[i]){
      guessedWordArr[i] = guessedLetter;

    }

  }
  
  return guessedWordArr.join("");
}

/*put functions initials get first word, etc here too */

function rndChooseWord() {

  // This randomly selects a word from the list
  currentWordPos = (Math.floor(Math.random() * (wordstring.length)) + 1);

}



function putTheValuesInDivs(newWordValueSent) {

  document.getElementById("wordguessing").innerHTML = newWordValueSent;
  
  /* place the info in appropiate position*/

}

function putUpTheGuesses(userGuessDisp,guessRemDisp) {
  document.getElementById("guessedLetters").innerHTML = userGuessDisp; 
  document.getElementById("numGuessed").innerHTML = guessRemDisp; 
}

function showScore(wins,losses) {
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses; 
}

function isItALetter(ltr)  
{   
  var allletters = "abcdefghijklmnopqrstuvwxyz";  
  var n = allletters.includes(ltr);
  console.log(n,ltr)
  if (n) {  
    return true;  
  }  
  else  {  
    alert('Please input alphanumeric characters only');  
    return false;  
  }  
}  


rndChooseWord();
console.log(currentWordPos);
var newWordValue = initUnderLnGuessStrg();

putTheValuesInDivs(newWordValue);
putUpTheGuesses(guessingWordString,guessesRemain);
showScore(wins,losses);

document.onkeyup = function(event) {

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  if (isItALetter(userGuess)) {
      guessingWordString = guessingWordString + userGuess;
      guessesRemain--;
      putUpTheGuesses(guessingWordString,guessesRemain);
      newWordValue = addGuessToGuessString(newWordValue,userGuess);
    /* console.log (newWordValue); */
      putTheValuesInDivs(newWordValue);

      if ((newWordValue === wordstring[currentWordPos]) && (guessesRemain > 0)) {
        wins++;
        alert("You Win");
        rndChooseWord();
        newWordValue = initUnderLnGuessStrg();
        putTheValuesInDivs(newWordValue);
        putUpTheGuesses(guessingWordString,guessesRemain);
        showScore(wins,losses);

      }
      else {
          if (guessesRemain === 0){
            losses++;
            alert("You Lose");
            rndChooseWord();
            newWordValue = initUnderLnGuessStrg();
            putTheValuesInDivs(newWordValue);
            putUpTheGuesses(guessingWordString,guessesRemain);
            showScore(wins,losses);
          }
      }
  }
    
}


