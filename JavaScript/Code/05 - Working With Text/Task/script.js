let text = ' Lorem ipsum dolor sit amet';

let duljinaStringa = text.length

console.log(duljinaStringa);

let textSlice = text.slice(19, 22);

console.log(textSlice);

let textReplace = text.replace('amet', 'elit');

console.log(textReplace);

let newText = 'consectetur adipiscing elit';

let unifiedText = text + newText;

console.log(unifiedText);

let textCaps = text.toUpperCase();

console.log(textCaps);

let textTrim = text.trimStart();
console.log(textTrim);
let findText = textTrim.charAt(12);
console.log(findText);