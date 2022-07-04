
let correctGuess = false;
const guess = prompt('Koji je odgovor liche?');
const number = 8;

if(+guess===number){
    correctGuess = true;
}

if(correctGuess) {
    console.log('bravo');
} else{
    console.log('ne');
}
