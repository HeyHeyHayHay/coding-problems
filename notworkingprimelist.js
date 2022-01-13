
let listprimes = [];
let amount = 1;
let testprime = 2;

while (amount < 10){
  let testfactor = testprime;

  while (testfactor > 1){

    if (testprime%testfactor == 0){
      listprimes.push(testprime);
      amount++;

      testfactor--;

    }else{
      testfactor--;
    }
    ;

  };
  testprime++;
};

console.log(listprimes);
