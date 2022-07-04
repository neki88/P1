let a1 = prompt('sa kojim programom pravis strukturu web stranice?');
let a2 = prompt('sa kojim programom pravis izgled web stranice?');
let a3 = prompt('sa kojim programom pravis ponasanje web stranice?');
let a4 = prompt('sa kojim programom pravis izgleda na steroidima web stranice?');
let a5 = prompt('kada ces naci orvi posao u ITu?');

let score = 0;

if(a1.toUpperCase() === 'HTML'){
    score += 1;
}
if(a2.toUpperCase() === 'CSS'){
    score += 1;
}
if(a3.toUpperCase() === 'JS'){
    score += 1;
}
if(a4.toUpperCase() === 'SASS'){
    score += 1;
}
if(+a5.toUpperCase() === 1){
    score += 1;
}

if(score === 5){
    console.log(`U got the gold!!!`);
} else if(score === 4 || score === 3){
    console.log(`U got the silver!!!`);
} else if(score === 2 || score === 1){
    console.log(`U got the bronze!!!`);
} else if(score === 0){
    console.log(`U got the nothing lool!!!`);
}

//console.log(`Osvojen broj bodova je ${score}`);