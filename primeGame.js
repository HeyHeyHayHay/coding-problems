

function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

const randomNumber = Math.floor(Math.random() * 10000);

function concatenateNumbers(numbers) {
  return Number(numbers.join(''));
}

//problesm



let integer = 8;
let savePrevious = 0;

while (integer!=savePrevious) {

  newResult = concatenateNumbers(primeFactors(integer));

  savePrevious = integer;

  integer = newResult;


  console.log(newResult)

}

console.log(integer)
