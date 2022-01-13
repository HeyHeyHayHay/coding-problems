
//finds two numbers in a list which add up to the number you want
//will display empty lists if none
//displays the last combination that works

const listOfAddends = [2, 11, 19, 7, 3, 7, 1, 8];
const goalNumber = 100;

let answer = [];
let answerIndex = [];

for (let firstAddendIndex = 0; firstAddendIndex <= (listOfAddends.length - 2); firstAddendIndex++){
  for (let secondAddendIndex = 1; secondAddendIndex <= (listOfAddends.length - 1); secondAddendIndex++){
    if ( (listOfAddends[firstAddendIndex])+(listOfAddends[secondAddendIndex]) == goalNumber){

      answerIndex[0] = firstAddendIndex;
      answerIndex[1] = secondAddendIndex;

      answer[0] = listOfAddends[firstAddendIndex];
      answer[1] = listOfAddends[secondAddendIndex];

    };
  };
};


console.log(answerIndex);
console.log(answer);
