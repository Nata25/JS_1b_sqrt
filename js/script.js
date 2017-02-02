// Calculate square root of n
// @param n number >=0
// @return result number

function sqrt_new(n) {
    var step = 1;
    var result = guess = 0;
    var diff, max, prevTest, nextTest;
    var parts = [];
    var period;
    var shift = 0;
    var precision = 15;

    var strToNum = n.toString();

    // check for period
    period = strToNum.toString().indexOf('.');
    if (period != -1) {
        // len--;
        shift = strToNum.length - period;
        shift += shift % 2;
        n = n * Math.pow(10, shift);
        strToNum = n.toString();
        shift = shift / 2;
    }

    var len = strToNum.length;
    // break number to parts
    if (len % 2 != 0) {
        strToNum = " " + strToNum;
    }

    for (var i = 0; i < len; i += 2) {
        parts.push(strToNum.substr(i, 2));
    }

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
            nextTest = +( (result * 2).toString() + guess ) * guess;
        } while (nextTest <= max);

        guess -= step;
        result = +( result.toString() + guess.toString() );
   }

   // Check if sqrt was calculated successfully
   if (prevTest == max) {
       return result * Math.pow(0.1, shift);
   }
   // Calculate sqrt to given precision
   else {
       for (var i = 1; i <= precision; i++) {
           parts.push("00");
           diff = (max - prevTest).toString();
           max = parseInt(diff + parts[i + iterations]);
           guess = nextTest = 0;
           do {
               prevTest = nextTest;
               guess++;
               nextTest = +((result * 2).toString() + guess) * guess;
           } while (nextTest <= max);
           guess -= step;
           result = +(result.toString() + guess.toString());
       }
       result = result * Math.pow(0.1, precision + shift);

       return result;
   };
}

// Sample numbers for testing:
// var number = 36;
// var number = 625;
// var number = 138384;
// 372

// var number = 100000.0001;
// 316.2277661749518

// var number = 2530.09;
// 50.300000000000004

// var number = 25.3011;
// 5.030019880676417

// var number = 360;
// 18.973665961010276

// var number = 31.4;
// 5.60357029044876

// var number = 0.3140;
// 0.5603570290448759

// var number = 3.14
// 1.772004514666935

// var number = 31.4
// 56.0357029044876

// var number = 0.01;
// 0.1

// var number = 0.1;
// 0.31622776601683794

var number = prompt("Enter a number: ");
console.log(sqrt_new(number));
