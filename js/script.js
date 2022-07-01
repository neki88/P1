// osnovne komande https://teamtreehouse.com/library/display-messages-with-javascript

// var

var poruka = 'da li ovo radi?';
console.log(poruka);
poruka = 'menjam valu od var poyy';
console.log(poruka);

// let const

// METHOD: prompt();  

let odg1 = prompt('ko si ti bre');
let odg2 = prompt('kako prezime lolo');
alert("Dobar dan " +odg1 + " " +odg2);

//String Concatenation better way

const name = prompt('What is ur name?');
const message = 'Hello ' + name;

console.log(message);

//JavaScript provides a more intuitive way to work with strings with a feature called "template literals." Template literals not only make your code more usable and readable, but they also enhance how you work with strings.

const name1 = prompt('What is ur name?');

const message2 = `Dobar den gosin
${name1}, kako ste ovog divnog jutra u ${3+5} sati`;

console.log(message2);


