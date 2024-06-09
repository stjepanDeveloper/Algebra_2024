const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

let sumOfEvenNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i]);
            sumOfEvenNumbers += numbers[i];
        }
    }

const averageOfEvenNumbers = sumOfEvenNumbers / evenNumbers.length;

console.log(`The average value of the array is ${averageOfEvenNumbers}.`);