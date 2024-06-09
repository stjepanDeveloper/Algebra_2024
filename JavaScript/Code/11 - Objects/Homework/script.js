var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true,
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false,
    },
];


for (let i = 0; i < library.length; i++) {

    let book = library[i]; // Moramo definirati iteraciju niza objekata

    if (book.readingStatus){
        console.log(`Knjiga ${book.title} od ${book.author} je vec procitana.`);
    } else {
        console.log(`Knjiga ${book.title} od ${book.author} jos nije procitana.`);
    }
};