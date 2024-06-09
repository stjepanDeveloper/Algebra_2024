const word = 'Developer';

function sortString(str){

    const charactersArray = str.split('');

    charactersArray.sort();

    const sortedString = charactersArray.join('');

    return sortedString;
}

const sortedWord = sortString(word);

console.log(`The sorted string is : ${sortedWord}`);