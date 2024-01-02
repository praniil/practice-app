var array = [];
for (var i = 0; i < 100; i++) {
    array[i] = i;
}
array[-1] = 10000000;
var targetNumber = 65;
var firstNumberIndex = 0;
var lastNumberIndex = array.length - 1;
var numberFound;
for (var i = firstNumberIndex; i <= lastNumberIndex; i++) {
    var middleNumberIndex = (firstNumberIndex + lastNumberIndex) / 2;
    middleNumberIndex = parseInt(((firstNumberIndex + lastNumberIndex) / 2).toString());
    console.log(middleNumberIndex);
    if (targetNumber === array[middleNumberIndex]) {
        numberFound = array[middleNumberIndex];
        console.log("found: ", numberFound);
        break;
    }
    else if (targetNumber > array[middleNumberIndex]) {
        firstNumberIndex = middleNumberIndex;
        // middleNumberIndex =( firstNumberIndex + lastNumberIndex )/ 2;
    }
    else {
        lastNumberIndex = middleNumberIndex;
        // middleNumberIndex =( firstNumberIndex + lastNumberIndex )/ 2;
    }
}
// let numberFound: number;
// let step :number = 0
// for (let i = firstNumber; i < lastNumber; i++) {
//   let middleNumber: number = (firstNumber + lastNumber) / 2;
//   if (targetNumber === middleNumber) {
//     numberFound = middleNumber;
//     console.log(numberFound);
//     step++
//     break;
//   } else if (targetNumber > middleNumber) {
//     firstNumber = middleNumber;
//     middleNumber = (firstNumber + lastNumber) / 2;
//     step++
//   } else {
//     lastNumber = middleNumber;
//     middleNumber = (firstNumber + lastNumber) / 2;
//     step++
//   }
// }
// console.log("step is", step)
// let step: number = 0
// while (true) {
//     let midIndex :number = array.length / 2
//     midIndex = parseInt(midIndex.toString())
//     // if (midIndex === 0) {
//     //     console.log(array)
//     //     break
//     // }
//     if (array[midIndex] === targetNumber) {
//         step++
//         console.log("number found", array[midIndex])
//         break
//     } else if (array[midIndex] > targetNumber) {
//         array = array.slice(0, midIndex)
//         step++
//     } else {
//         array = array.slice(midIndex, array.length - 1)
//         step++
//     }
// }
// console.log("total steps", step)
