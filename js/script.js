var number = 253009;
// var number = 625;
// var number = 138384;

function sqrt_new(n) {
    var step = 1;
    var guess = 0;
    var currentResult = guess;
    var diff, max, test;
    var parts = [];

    // break number to parts
    var strToNum = n.toString();
    var len = strToNum.length;
    if (len % 2 != 0) {
        strToNum = " " + strToNum;
    }
    for (var i = 0; i < len; i += 2) {
        parts.push(strToNum.substr(i, 2));
    }

    // find first number of result
    max = parts[0];
    do {
        guess += step;
        test = guess * guess;
    }
    while (test <= max);

    guess -= step;
    currentResult = guess;
    test = guess * guess;

    // find the rest of numbers
    var iterations = parts.length - 1;

    for (var i = 0; i < iterations; i++) {

        diff = max - test;
        max = parseInt(diff + parts[i+1]);
        guess = 0;
        do {
            guess++;
            test = +((currentResult * 2).toString() + guess) * guess;
        } while  (test <= max);

        guess -= step;
        test = +((currentResult * 2).toString() + guess) * guess;
        currentResult = +(currentResult.toString() + guess.toString());
   }
    return currentResult;
}

console.log(sqrt_new(number));
