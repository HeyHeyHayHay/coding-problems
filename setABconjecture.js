
let primeFactors = [2,2,3,3,3,5,5];

let counterexample = false;

let setA = [1,6,5];
let setB = [3,4,5];

//randomize setA and set B

let numberofPrimeFactors = primeFactors.length;

let randomIndexValue = Math.floor(numberofPrimeFactors*Math.random())



















// Checks if A and B are a counterexample
  counterexample = false;
if (setA != setB){

  let lengthOfA = setA.length;
  let lengthOfB = setB.length;
  if(lengthOfA == lengthOfB) {
    let sumA = 0;
    let sumB = 0;
    for (let i = 0; i < lengthOfA; i++) {
      sumA = sumA + setA[i];
      sumB = sumB + setB[i];


    }
      if (sumA == sumB){
        let prodA = 1;
        let prodB = 1;
        for (let i = 0; i < lengthOfA; i++) {
          prodA *= setA[i];
          prodB *= setB[i];

        }

        if (prodA == prodB){
          counterexample = true;
        }

      }

  }

  console.log(setA, setB, counterexample)

}
