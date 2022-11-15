let lightbulbs = [1,1,0,0,1,1,0,1,1,1];

let changesInput = [3, 4, 7];

console.log(lightbulbs)

const length = lightbulbs.length;

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

const maxNum = getMaxOfArray(changesInput);


let listPrimes = [2];
let amount = 1;
let testPrime = 3;

while (amount < Math.ceil((length+1)/2)){
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


function changeLightbulb(list, primeFactor, multiplicty){
  let length = list.length;

  if (multiplicty % 2 == 1){
    for (let i = primeFactor-1; i < length; i=i+primeFactor) {
      list[i] = (list[i]+1)%2
    };
  };
  return list;
};


for (let primeIndex = 0; listPrimes[primeIndex] <= maxNum; primeIndex++) {

  let multiplicty = 0

  for (let changeListIndex = 0; changeListIndex < changesInput.length; changeListIndex++) {


    while(changesInput[changeListIndex]%listPrimes[primeIndex] == 0){

      multiplicty++


      changesInput[changeListIndex] = changesInput[changeListIndex] / listPrimes[primeIndex]

    };

  };

  changeLightbulb(lightbulbs, listPrimes[primeIndex], multiplicty)

  console.log("prime", listPrimes[primeIndex], "multiplicty", multiplicty)

  console.log(lightbulbs)


};
