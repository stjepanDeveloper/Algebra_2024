var text = ' Lorem ipsum dolor sit amet';

var length = text.length; // 1.
var wordSit = text.substring(19, 3); // 2. - neka druga metoda je isto OK

text.replace('amet', 'elit'); // 3. - eventualno Regex ako netko ima iskustva, ali za sada ignorirajte Regex

var newText = text + ', consectetur adipiscing elit'; // 4.

text.toUpperCase(); // 5.
text.trim(); // 6.
text.charAt(12); // 7. solution is letter "d" - must invoke on trimmed string

// Method Chaining - not to be confused with https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

console.log('Novi tekst ' + text.trim().charAt(12).toUpperCase());
