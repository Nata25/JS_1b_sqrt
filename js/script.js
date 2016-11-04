var number = 363924804;

function sqrt_new(n) {
    var strToNum = n.toString();
    var sides = [];
    var len = strToNum.length;
    console.log(len);
    if (len % 2 != 0) {
        strToNum = " " + strToNum;
        console.log(strToNum);
    }
    for (var i = 0; i < len; i += 2) {
        sides.push(strToNum.substr(i, 2));
    }

    for (var i = 0; i < sides.length; i++) {
        console.log("array", sides[i]);
    }

    return sides.length;
}

console.log(sqrt_new(number));
