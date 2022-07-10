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
if(+a5 === 1){
    score += 1;
}

let kruna;

if(score === 5){
    console.log(`U got the gold!!!`);
    kruna = 'ZLATNU';
} else if(score >= 3){
    console.log(`U got the silver!!!`);
    kruna = 'SREBRNU';
} else if(score >=1){
    console.log(`U got the bronze!!!`);
    kruna = 'BRONANU';
} else{
    console.log(`U got the nothing lool!!!`);
    kruna = 'ni jednu lolo'
}



//console.log(`Osvojen broj bodova je ${score}`);

document.querySelector('main').innerHTML =`<p>osvojio si ${score} poena</p><p>i dobio si ${kruna} krunu</p>`;