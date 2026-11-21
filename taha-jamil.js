//****Find the largest number in an array.*/

// let numbers = [10, 25, 5, 80, 40];

// let largest = 0;

// for(i = 1; i <= numbers.length; i++){
//       if(numbers[i] > largest){
//         largest = numbers[i]
//       }
// };

// console.log(largest);

/****Check if the target number exists in the array.*/

// let numbers = [10, 20, 30, 40, 50];
// let target = 30;

// for(i = 0; i < numbers.length; i++){
//    if(numbers[i] === target) {
//        console.log(numbers[i])
//    }
// }

/****Print Array in Reverse Order*/


// let numbers = [1, 2, 3, 4, 5];

// for(let i = numbers.length - 1; i >= 0; i--){
// console.log(numbers[i])
// }

/*******Count Even Numbers in an Array***/


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let count = 0;

// for(i = 0; i <= numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         count++
//     }
// }


// console.log(count);

//*******Search a Target in an Array***//


// let numbers = [10, 20, 30, 40, 50];
// let target = 30;

// let found = false;

// for(i = 0; i < numbers.length; i++){
//      if(numbers[i] === target){
//         found = true;
//         console.log("Number found in index", i)
//         break;         
//      }
// }
// if (found === false){
//     console.log("Number is not found");
// }

/*****Calculate the Sum of Array Elements*/

// let numbers = [10, 20, 30, 40, 50];

// let sum = 0;

// for(i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i];
// }

// console.log("Total sum",sum);


//****Find Smallest Number in an Array**//


// let numbers = [25, 10, 45, 5, 30];

// let Smallest = numbers[0];

// for(i = 1; i < numbers.length; i++){
//     if(numbers[i] < Smallest){
//            Smallest = numbers[i]
//     }
// }

// console.log(Smallest);

///******Count Odd Numbers**/

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let count = 0;

// for(i = 0; i < numbers.length; i++){
//       if(numbers[i] % 2 != 0){
//           count++
//       }
// }

// console.log(count)


// *****Find Positive Numbers**/

// let numbers = [-5, 10, -2, 20, 0, 15, -8, 5];

// for(i = 0; i <= numbers.length; i++){
//    if(numbers[i] > 0){
//        console.log(numbers[i])
// }
// }



// Remove Duplicate Numbers


let numbers = [10, 20, 10, 30, 20, 40];

for(i = 0; i < numbers.length; i++){
     if(numbers[0] < numbers[i]){
          console.log(numbers[i])
     }
}








