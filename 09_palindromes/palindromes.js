const palindromes = function (phrase) {
    
let phraseArray = [];
phrase = phrase.toLowerCase();
for (let i = 0; i < phrase.length; i++) {
    phraseArray.push(phrase.charAt(i));
}

phraseArray = phraseArray.filter((char) => char != " ");
phraseArray = phraseArray.filter((char) => char != ",");
phraseArray = phraseArray.filter((char) => char != ".");
phraseArray = phraseArray.filter((char) => char != "!");

if (phraseArray.toString() === phraseArray.reverse().toString()) {
    return true;
} else {
    return false;
}

};


// Do not edit below this line
module.exports = palindromes;