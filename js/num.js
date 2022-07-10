const odgovor = prompt('Do kog broja cemo da idemo?');
const odgovor2 = prompt('ispod kog broja necemo?');

const odabrani = Math.round(Math.random() * +odgovor) +1;

if(odabrani){

    document.querySelector('main').innerHTML = `<h1>odabrani broj je ${odabrani}</h1>`
}

else{
    document.querySelector('main').innerHTML = `<h1>molim vas ukucajte broj</h1>`
}