var number = 81;

function sqrt_new(n) {

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
    var iterations = parts.length;

    var current = 1;

    for (var i = 0; i < iterations; i++) {
        console.log(parts[0]);
        while (current * current < parts[0]) {
            current++;
        }
        console.log(current);
   }

    return current;
}

console.log(sqrt_new(number));
