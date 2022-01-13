let fizzBuzzList = [];
for (let number = 1; number < 100; number++){
  let printedNumber = number;
  if (number%3 == 0){
    printedNumber = "Fizz";
  };
  if (number%5 == 0){
    printedNumber = "Buzz";
  };
  if (number%15 == 0){
    printedNumber = "FizzBuzz";
  };
  fizzBuzzList.push(printedNumber);
};
console.log(fizzBuzzList);
