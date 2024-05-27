const words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

let longest = 0;
for (let i = 0; i < words.length; i++) {
  if (longest < words[i].length) {
    longest = words[i];
  }
}
console.log(longest);

