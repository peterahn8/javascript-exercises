const repeatString = function(string, num) {
    let base = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let counter = 0; counter < num; counter++) {
        base += string;
    }
    return base;
};

// Do not edit below this line
module.exports = repeatString;
