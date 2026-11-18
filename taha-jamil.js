let numbers = [10, 25, 5, 80, 40];

let largest = 0;

for(i = 1; i <= numbers.length; i++){
      if(numbers[i] > largest){
        largest = numbers[i]
      }
};

console.log(largest);

