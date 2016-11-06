var number = 253009;
// var number = 625;

function sqrt_new(n) {
    var current, delta, max, test, guess, result;
    var step = 1;
    var current = 0;

    // break number to parts
    var strToNum = n.toString();
    var parts = [];
    var len = strToNum.length;
    if (len % 2 != 0) {
        strToNum = " " + strToNum;
    }
    for (var i = 0; i < len; i += 2) {
        parts.push(strToNum.substr(i, 2));
    }

    // find first number of result
    while ( (current) * (current) <= (parts[0]) )  {
        current += step;
    }

    current = current - step;
    // console.log(result);

    // find the rest of numbers
    max = parts[0];
    test = current * current;

    var iterations = parts.length - 1;

    for (var i = 0; i < iterations; i++) {
        console.log("iteration " + i + ", max = " + max, ", test = ", test);
        delta = max - test;
        max = parseInt(delta + parts[i+1]);
        console.log("max at the beginning of iteration:", max);
        guess = 0;
        do {
            guess++;
            test = +((current * 2).toString() + guess) * guess;
            console.log( "guess", guess, ", test", test);
        } while  (test <= max);


        guess -= step;
        console.log("guess = ", guess);
        console.log("current = ", current);
        test = +((current * 2).toString() + guess) * guess;
        current = +(current.toString() + guess.toString());
        console.log("test after iteration", i, ": ", test);
        console.log("max after iteration", i, ": ", max);
   }

    return current;
}

console.log(sqrt_new(number));
