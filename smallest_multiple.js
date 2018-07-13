/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function (ceiling) {
  let smallestMultiple = 1;
  let largestMultiple = 1;
  let primeArray = [];
  let multiplesArray = [];
  let currentNumber = 2;
  let smallestStep = 1;

  let maxNumber = ((ceiling) => {
    let product = 1;
    while (ceiling > 1) {
      product *= ceiling;
      ceiling--;
    }
    return product;
  });

  for (let i = 0; i < ceiling - 1; i++) {
    multiplesArray[i] = i + 2;
  }
  largestMultiple = maxNumber(ceiling);

  while (currentNumber <= largestMultiple) {
    if (largestMultiple % currentNumber === 0) {
      if (primeArray.every(primeNumber => currentNumber !== primeNumber)) {
        smallestStep *= currentNumber;
      }
      largestMultiple = largestMultiple / currentNumber;
      primeArray.push(currentNumber);

    } else {
      currentNumber++;
    }
  }

  largestMultiple = maxNumber(ceiling);

  for (let i = smallestStep; i <= largestMultiple; i+= smallestStep) {
    // console.log(i);
    if (multiplesArray.every(multiple => i % multiple === 0)) {
      smallestMultiple = i;
      break;
    }
  }

  // console.log(primeArray);
  // console.log(largestMultiple);
  // console.log(smallestStep);
  // console.log(smallestMultiple);
  // while (currentNumber <= ceiling)

  return smallestMultiple;
};

// let smallestMultiple = 1;
// let largestMultiple = 1;
// let primeArray = [];
// let currentNumber = ceiling;
// let smallestMultiples = [];

// let maxNumber = ((ceiling) => {
//   let product = 1;
//   while(ceiling>1){
//     product *= ceiling;
//     ceiling--;
//   }
//   return product;
// });

// largestMultiple = maxNumber(ceiling);

// for(let i = 0; i<ceiling-1; i++){
//   primeArray[i] = i+2;
// }

// while (largestMultiple){

// }

// console.log(primeArray);
// console.log(largestMultiple);
// console.log(smallestMultiple);