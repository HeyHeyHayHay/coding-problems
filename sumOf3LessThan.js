let listOfNumbers = [4, 5, 8, 2];

let wantedminmumValue = 17;

let listOfValidTriplets = [];

for (let i = 0; i < listOfNumbers.length-2; i++) {

  for (let j = i+1; j < listOfNumbers.length-1; j++) {

    for (let k = j+1; k < listOfNumbers.length; k++) {

console.log([listOfNumbers[i],listOfNumbers[j],listOfNumbers[k]], listOfNumbers[i]+listOfNumbers[j]+listOfNumbers[k])


      if (listOfNumbers[i]+listOfNumbers[j]+listOfNumbers[k] >= wantedminmumValue){

        listOfValidTriplets.push([listOfNumbers[i],listOfNumbers[j],listOfNumbers[k]])

      }

    }

  }

}

console.log(listOfValidTriplets)
