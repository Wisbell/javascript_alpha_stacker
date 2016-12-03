// Create an array that contains the letters of the alphabet
var alphabet = [];



function getLetters() {
    for (var i = 0; i < 26; i++) {
        //console.log(String.fromCharCode(i))
       alphabet.push(String.fromCharCode(i + 65).toLowerCase());
    }
}



// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */

    var current_alpha_line = [];



     for (var i = 0; i < theAlphabetArray.length; i++) {


        // adds current letter to the current_alpha_line array
        current_alpha_line.push(theAlphabetArray[i]);

        /*If the current value of the counter variable can be evenly
        divided by 3 - using the JavaScript remainder operator - then
        add a single space to the output. */

        if ((i + 1) % 3 === 0) {
            current_alpha_line.push(' ');
        }

        // join the current_alpha_line array into a string
        console.log(current_alpha_line.join(''));

     }
}


// Be a programmer and get letters using fromCharCode
getLetters();

// Invoke the function and pass in the array
stackLetters(alphabet);
