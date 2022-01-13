
const string = 'ksdvokdjdannadngjehfkejfkdjjejejejejejcroivnsjkjeuuuedkfjslk';
let testString;
let palindromeTrueFalse = true;
let longestPalindrome;
let lengthOfPalindrome;
let lengthOfLongestPalindrome = 0;
let answer = [];


for (let beginning = 0; beginning < string.length; ++beginning){
  for (let end = string.length-1; end > beginning; end--){

    testString = string.substring(beginning, end);
    palindromeTrueFalse = true;

    if (palindromeTrueFalse === true){

      for (let testPosition = 0; testPosition < ( Math.ceil(string.length/2) ); testPosition++){

        if (testString.charAt(testPosition) != testString.charAt(testString.length-(1+testPosition))){
          palindromeTrueFalse = false;
        };
      };

      if (palindromeTrueFalse === true){

        lengthOfPalindrome = testString.length;

        if (lengthOfPalindrome > lengthOfLongestPalindrome){

          lengthOfLongestPalindrome = lengthOfPalindrome;
          longestPalindrome = testString;

        };

        if (lengthOfPalindrome == lengthOfLongestPalindrome){
          longestPalindrome = testString;
          answer.push(longestPalindrome);
        };
      };
    };
  };
};

answer.push(lengthOfLongestPalindrome);

console.log(answer);
