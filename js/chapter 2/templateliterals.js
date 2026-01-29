// Template literals allow you to embed variables and expressions inside strings and write multi-line strings easily.
let pencil = 10;
let pen =20;
let output1 = " the total number of pens and pencils is " + (pencil + pen)+"sum";/*  withour template literals */
let output = ` the total number of pens and pencils is ${pencil + pen} sum `; /* with template literals  we use backticks  and ${}  to evaluate expression inside it */
console.log(output);