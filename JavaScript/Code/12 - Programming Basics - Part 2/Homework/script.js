// Zadatak 1.

// function calculate(x, y, operator) {
//     let result;

//     switch(operator) {
//         case '+':
//             result = x + y;
//             break;
        
//         case '-':
//             result = x - y;
//             break;

//         case '*':
//             result = x * y;
//             break;

//         case '/':
//             result = x / y;
//             break;

//         default:
//             result = 'Invalid operator';

//     }

//     return result;

// }

// console.log(calculate(5, 5, '*'));


// Zadatak 2.

// function reverseString(str){
//     let charactersArray = str.split('');

//     charactersArray.reverse();

//     let reversedString = charactersArray.join('');

//     return reversedString;
// }

// console.log(reverseString('Developer'));


// Zadatak 3.

// function filterArray(arr){
    
//     let evenNumbers = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0){
//             evenNumbers.push(arr[i]);
//         }
//     }

//     return evenNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// Zadatak 4.

// function formatName(person) {

//     const firstName = person.firstName;
//     const lastName = person.lastName;

//     const formattedName = firstName + lastName;

//     return formattedName;
// }

// var person = {firstName : 'Donald ', lastName : 'Trump'};

// console.log(formatName(person));


// Zadatak 5.

// function addObjectProperty(obj, key, value) {
//     obj[key] = value;

//     return obj;
// }

// const obj = {a:1, b: 2};

// console.log(addObjectProperty(obj, 'z', 7));


// Zadatak 6.

// function findMax(arr) {

//     let maxNum = 0;

//     for(let i = 0; i < arr.length; i++) {
        
//         if (arr[i] > maxNum){

//             maxNum = arr[i];
//         }
//     }

//     return maxNum;
// }

// console.log(findMax([5, 7, 57, 120, 1005]));


// Zadatak 7.

// function countVowels(str) {

//     const vowels = 'aeiou';

//     let count = 0;

//     for (let i = 0; i < str.length; i++){
        
//         if(vowels.includes(str[i].toLowerCase())) {

//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels('hello world'));

// Zadatak 8.

// function fullName(firstName, lastName, age){

//     const user = {
//         firstName : firstName,
//         lastName : lastName,
//         age : age
//     };

//     return user;
// }

// console.log(fullName('John', 'Doe', 20));


// Zadatak 9.

// function removeDuplicates(arr){

//     const uniqueElements = new Set(arr);

//     const uniqueArray = [...uniqueElements];

//     return uniqueArray;
// }

// console.log(removeDuplicates([5, 5, 3, 6, 77, 77, 5, 9, 9, 9, 10, 15]));


// Zadatak 10.

// function sumArrayValues(arr){

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++){

//         sum += arr[i];
//     }

//     return sum;
// }

// console.log(sumArrayValues([5, 5, 7, 7]));


// Zadatak 11.

// function findLongestWord(str){

//     const words = str.split(' ');

//     let longestWord = '';

//     for (let i = 0; i < words.length; i++){

//         if(words[i].length > longestWord.length){

//             longestWord = words[i];
//         }

//     }

//     return longestWord;

// }

//     console.log(findLongestWord('The quick firefox jumps over the lazy dog.'));







