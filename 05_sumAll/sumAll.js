const sumAll = function(start, end) {
finalSum = 0;
if (typeof start != "number" || typeof end != "number") {
    return "ERROR";
}
if (start < 0 || end < 0) {
    return "ERROR";
}
if (start > end) {
    let temp;
    temp = start;
    start = end;
    end = temp;
}
for (start; start <= end; start++) {
    finalSum += start;
}
return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
