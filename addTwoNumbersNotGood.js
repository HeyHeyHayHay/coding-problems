// 9,999,999 + 9,999 = 10009998
const firstAddendList = [9,9,9,9,9,9,9];
const secondAddendList = [9,9,9,9];
let sumList = [];
let carriedNumber = 0;

while (firstAddendList.length > secondAddendList.length){
  secondAddendList.push(0);
};


while (firstAddendList.length < secondAddendList.length){
  firstAddendList.push(0);
};



for (digitIndex = 0; digitIndex < firstAddendList.length; digitIndex++){

  let sum = firstAddendList[digitIndex]+secondAddendList[digitIndex]+carriedNumber;

  if (sum >= 10){
    let sumString = sum.toString();
    let sumDigits = sumString.split('');


    carriedNumber = sumDigits[0];

    sumList.push(sumDigits[1]+carriedNumber);

  } else {

    sumList.push(sum);
    carriedNumber = 0;


  }

};


console.log(sumList);
