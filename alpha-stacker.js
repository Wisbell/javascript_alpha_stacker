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

     // var i = 0;

     // while (i < theAlphabetArray.length) {

     //    i++
     // }




     for (var i = 0; i < theAlphabetArray.length; i++) {
        console.log(theAlphabetArray[i])

        // for (var x = 0; i < theAlphabetArray.length; x++) {
        //     console.log(theAlphabetArray[x])
        // }

     }
}


// Be a programmer and get letters using fromCharCode
getLetters();

// Invoke the function and pass in the array
stackLetters(alphabet);
