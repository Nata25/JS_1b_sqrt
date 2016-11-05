var number = 10201;

function sqrt_new(n) {
    var current, delta, max, test, guess;
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
    while ( (current + step) * (current + step) <= (parts[0]) )  {
        current += step;
    }

    // find the rest of numbers
    max = parts[0];
    test = current * current;

    var iterations = parts.length - 1;

    for (var i = 0; i < iterations; i++) {
        // console.log(max, test);
        delta = max - test;
        // console.log(current, delta);
        max = parseInt(delta + parts[i+1]);
        console.log(max);

        guess = 1;

        while ( (current * 20 + guess) * (guess) <= max) {
            guess++;
            console.log(guess);
        }

        var result = current.toString() + (guess - 1).toString();
   }

    return result;
}

console.log(sqrt_new(number));
