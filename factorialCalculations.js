//factorial number of digits

let factorial = 1;
let digits =  1;


for (let i = 1; i < 1000; i++) {

  factorial = i * factorial

  digits = Math.floor(Math.log10(factorial))

  console.log(i,digits,factorial)
}
