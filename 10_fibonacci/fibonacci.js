const fibonacci = function(fibo) {
    let n1 = 0,
        n2 = 1,
        next;

    for (let i = 1; i <= fibo; i++) {
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }

    if (fibo < 0) {
        return "OOPS";
    }
    
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
