// Function without return
function greet(name){
    console.log("Hello" + " " + name);
}
greet('Nino');

hello(); // function call

function add(a, b){
    // Body of the function
    return a + b;
};

// Invoking the function
console.log(add(3,4));
console.log(add(5,7));

var age = 18;
var sister = 'Jane';
function dynamicGreet(name){
    console.log(`Hello, ${name}, how are you today? You have ${age} years old, and your sisters name is ${sister}.`);
};

// var student = prompt('Enter a name: ');
// dynamicGreet(student);

// Samopozivajuća funkcija
// (function greet(){
//     console.log("Hello, I have invoked myself!")
// })();

// (function calculateBMI(){
//     var result;
    
//     var person = prompt("Please enter your name: ");
//     var weight = prompt(`What is your weight, ${person}?`);
//     var height = prompt(`And lastly , what is your height, ${person}?`);
    
//     result = weight / (height * 2);
    
//     alert(`${person} your BMI score is ${result.toFixed(2)}`);
// })();





