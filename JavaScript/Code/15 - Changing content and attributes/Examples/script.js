// Example number 1

var paragraph = document.createElement('p'); // Create paragraph

var element = document.getElementById('div1'); // Get div by ID

element.appendChild(paragraph); // Inject paragraph into div

var textNode = document.createTextNode('Am I new here? Yes, I am');

paragraph.appendChild(textNode); // Injecting text into paragraph



// Example number 2

var paragraph2 = document.getElementById('p2');

paragraph.remove();

// Example number 3

var h1 = document.querySelector('h1');

h1.innerText = 'Hello, class!';
h1.setAttribute('class', 'hero');
h1.setAttribute('id', 'hero');


// Example number 4

document.querySelector('#div2').innerHTML = '<h1> I have just added myself here. </h1>';