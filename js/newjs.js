//day 7

let imenica = prompt('imenicu reci neku');
let glagol = prompt('glagol reci neki');
let objekat = prompt('objekat reci neki');

//let drugikorak = pitanje.toUpperCase();

let poruka = `<h2>Jedan ${imenica} je hteo da ${glagol} ${objekat} ulicom</h2>`;


document.querySelector('main').innerHTML = poruka;


console.log(poruka);