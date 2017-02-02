// Calculate square root of n
// @param n number > 0.001;
// @return res number; floats are rounded to 3 dec places

function sqrt(n) {
    var guess1, guess2, currentResult;
    var delta;

    guess1 = n / 2;
    while (true) {
        guess2 = 0.5 * (guess1 + n / guess1);
        currentResult = guess2 * guess2;
        delta = Math.abs(n - currentResult);
        // console.log(currentResult, guess2);
        if (delta < 0.001) {
            res = Math.round(guess2 * 1000) / 1000;
            return res;
        }
        guess1 = guess2;
    }
}

// var number = 0.001;
var number = prompt("Enter a number: ");
console.log(sqrt(number));
