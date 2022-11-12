const repeatString = function(word, times) {
    let string = "";
    for (let counter = 0; counter < times; counter++) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
