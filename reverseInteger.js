const integer = "0";

let integerArray = integer.split("");
let reversedIntegerArray = [];
let answer;

for (let integerIndex = (integer.length-1); integerIndex >= 0; integerIndex--){
  reversedIntegerArray.push(integerArray[integerIndex])
};

let reversedIntegerString = reversedIntegerArray.join("");

if (integer === "0"){
  answer = "0";
  console.log(answer);
  reversedIntegerString = "";
};

while (reversedIntegerString.charAt(0) === 0){
  reversedIntegerString = reversedIntegerString.substring(1);
};

console.log(reversedIntegerString);
