var names = ['John', 'Jane', 'Bob',, 'Mike'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

names.push('Random Name');

console.log(names);

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
    if(names[i] == 'Jane'){
        break;
    }
}

console.log(Array.of(2, 4, 6, 8, 10));

