

const broj = (br1, br2) =>{
    const rezultat = Math.floor(Math.random() * (br1 - br2 + 1)) + br2;
    const greska = `Ukucajte broj`;
    if(typeof br1 === 'number' && typeof br2 === 'number'){
        return rezultat;
    } else{return greska}
    
}


alert(broj(9, '55'));
alert(greska);