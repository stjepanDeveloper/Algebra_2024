// Zadatak 1.

// function calculate(x, y, operator){
//     let result;

//     switch (operator) {

//     case "+" :
//         result = x + y;
//         break;

//     case "-":
//         result = x - y;
//         break;

//     case "*":
//         result = x * y;
//         break;

//     case "/":
//         result = x / y;
//         break;

//     default:
//         result = "Invalid operator";
// }
//     return result;
// }

// console.log(calculate(5, 5, "*"));



// Zadatak 2.

// let text = "Developer";

// function reverseString() {
//     let stringSplit = text.split("");
    
//     let reversedString = stringSplit.reverse();

//     let newString = reversedString.join("");

//     return newString;
// }

// console.log(reverseString());



// Zadatak 3.



// function filterArray(arr){

//     let parniBrojevi = [];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             parniBrojevi.push(arr[i]);
//         }
//     }

//     return parniBrojevi;
// }

// console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Zadatak 4.

// function formatName(person){

//     const firstName = person.firstName;
//     const lastName = person.lastName;

//     let formattedName = lastName + firstName;

//     return formattedName;
// }

// var person = {firstName: 'Donald', lastName: 'Trump '};

// console.log(formatName(person));







// Zadatak 5.


// const obj = {a: 1, b: 2};

// function addObjectProperty(obj, key, value){

//     obj[key] = value;

//     return obj;
    
// }

// console.log(addObjectProperty(obj, 'c', 3));


// Zadatak 6.

// function findMax(arr){

//     let maxNum = 0;

//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > maxNum){
//             maxNum = arr[i];

//         }
//     }
//     return maxNum;
// }

// console.log(findMax([2, 4, 6, 8, 10]));