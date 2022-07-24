

function daLiJePrazno(){

    const polje = document.querySelector('#info');

    if(polje.value === ''){ // (!polje.value) je ista stvar
        return true;
    } else{
        return false;
    }
}

const testPraznine = daLiJePrazno();

if(testPraznine){
    alert('molim popunite polje');
}

