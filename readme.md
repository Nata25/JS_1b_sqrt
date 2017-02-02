# Custom sqrt() function

Analogues to native JS Math.sqrt() function.

Two algorithms are used, both work with floats:

- `script.js`: divide a number into 2-digit parts; `num`  >= 0; some common tests are provided in comments;
- `newthon.js`: Newthon's method; `num` > 0.001; float results are rounded to 3 decimal places.

Number is taken from prompt(). Result is printed to the console.

By default, `script.js` is initiated. To see the other implementation, toggle
comments on links to .js files in `index.html`.
