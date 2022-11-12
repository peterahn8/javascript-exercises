const removeFromArray = function(...args) {
    const oldArray = args[0];
    const newArray = [];
    oldArray.forEach((item) => {
        if (args.includes(item) === false) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
