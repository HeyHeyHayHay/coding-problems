
let listPrimes = [2];
let amount = 1;
let testPrime = 3;

while (amount < 5000){
  let primeTrueFalse = true;
  let testFactor = 2;
  while (testFactor < testPrime){
    if (testPrime%testFactor == 0){
      primeTrueFalse = false;
    };
    testFactor++;
  };
      if (primeTrueFalse == true){
        listPrimes.push(testPrime);
        amount++;
      };
  testPrime++;
};

console.log(listPrimes);
