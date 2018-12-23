/* Globals */
var wins = 0;
var tries = 9;

var wordDisplay = document.getElementById("blank-spaces");
var guessedLetters = document.getElementById("my-choices");
var errorCount = document.getElementById("tries");
var winCounter = document.getElementById("correct");
var reset = document.getElementById("reset");

// Start game Function
function game () {

    var words = ['solar', 'sun', 'planet', 'asteroid', 'earth'];
    var answerArray = [];
    var rightArray = [];
    var wrongArray = [];

    // Get random array element
    var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);


    // Update wordDisplay with underscores matching length of word
    function underscores () {
        for(var i = 0; i < randomWord.length; i++) {
            answerArray[i] = "_";
            // Change html to match length of underscores
            wordDisplay.innerHTML = answerArray.join(" ");
        }
    }

    underscores();

    // update tries in DOM


    // *** getting rid of commas & making wordDisplay functional
    // *** var answerArray = answerArray.join(" ");
    // *** wordDisplay.innerHTML = answerArray;

    // Acquire user input && if user input is correct add to rightArray
    // Then replace the underscores with right letter
    document.onkeyup = function (event) {
        var keyWord = event.key;
        answerArray[randomWord.indexOf(keyWord)] = keyWord;
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            if (randomWord.indexOf(keyWord) !== -1) {
                rightArray.push(keyWord);
                wordDisplay.innerHTML = answerArray.join(" ");
                // See if all the underscores have been replaced
                if (answerArray.join("") == randomWord) {
                    // Raises win counter and displays it on screen
                    wins++;
                    winCounter.innerHTML = wins;
                    game();
                    guessedLetters.innerHTML = [];
                }
            } else {
                wrongArray.push(keyWord);
                // Display wrongArray on HTML
                guessedLetters.innerHTML = wrongArray.join(" ");
                tries--;
                errorCount.innerHTML = tries;
                
                if (tries === 0) {
                    confirm("You lose, Refresh to restart");
                }
            }
        }
    }

}

// Run game function
game();

// onclick button will activate reset function
reset.addEventListener("click", function () {
    game();
    guessedLetters.innerHTML = [];
    errorCount.innerHTML = 9;
    wins = 0;
    winCounter.innerHTML = 0;
});

// Adding Visuals and effects


 





