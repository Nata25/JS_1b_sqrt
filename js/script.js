// var number = 36;
// var number = 625;
// var number = 138384;
// var number = 2530.09;
var number = 360;

// Calculate square root of n
// @param n number >=0
// @return result number

function sqrt_new(n) {
    var step = 1;
    var guess = 0;
    var result = guess;
    var diff, max, prevTest, nextTest;
    var parts = [];
    var period, shift;
    var precision = 3;

    var strToNum = n.toString();
    var len = strToNum.length;

    // find period
    period = strToNum.toString().indexOf('.');
    if (period != -1) {
        // strToNum = strToNum.substring(0, period) + strToNum.substring(period+1);
        shift = len - 1 - period;
        if (shift % 2 == 0) {
            n = n * Math.pow(10, shift);
            strToNum = n.toString();
            shift = Math.pow(0.1, shift / 2);
        }
    }

    // break number to parts
    if (len % 2 != 0) {
        strToNum = " " + strToNum;
    }
    for (var i = 0; i < len; i += 2) {
        parts.push(strToNum.substr(i, 2));
    }

    console.log(parts);
    // find first number of result
    max = parts[0];
    do {
        prevTest = nextTest;
        guess += step;
        nextTest = guess * guess;
    } while (nextTest <= max);

    guess -= step;
    result = guess;

    // find the rest of numbers
    var iterations = parts.length - 1;

    for (var i = 0; i < iterations; i++) {
        diff = max - prevTest;
        max = parseInt(diff + parts[i+1]);
        guess = nextTest = 0;
        do {
            prevTest = nextTest;
            guess++;
            nextTest = +((result * 2).toString() + guess) * guess;
        } while (nextTest <= max);

        guess -= step;
        result = +(result.toString() + guess.toString());
   }
   if (shift > 0) {
       result = result * shift;
   }

   // check if sqrt was calculated successfully
   if (prevTest == max) {
       console.log(prevTest, max);
        return result;
   }
   // fill array of parts with zeroes
   else {
       console.log("error");
       for (var i = 1; i <= precision; i++) {
           parts.push("00");

           diff = (max - prevTest).toString();
           max = parseInt(diff + parts[i + iterations]);
           console.log(max);
           console.log(parts[i + iterations]); // unique
           guess = nextTest = 0;
           do {
               prevTest = nextTest;
               guess++;
               nextTest = +((result * 2).toString() + guess) * guess;
           } while (nextTest <= max);

           guess -= step;
           result = +(result.toString() + guess.toString());
       }
       return result;
   };

   // start of iterations with 00


   // end of iterations with 00


}

console.log(sqrt_new(number));
