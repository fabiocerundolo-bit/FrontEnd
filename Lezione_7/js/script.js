//Funzione parametrica



/**
 * 
 * @param {String} nome 
 */
function saluta(nome){
    console.log(`ciao ${nome}`);
}


saluta('Anna');
saluta(8);

/**
 * 
 * @param {*} nome 
 * @param {*} cognome 
 * @param {*} eta 
 * @param {*} email 
 */
function salutaStudente(nome, cognome, eta, email){
console.log(`Ciao, mi chiamo ${nome} ${cognome} ed ho ${eta} anni, la mia email è  ${email}`);

}

function presentaCorso(titolo= 'WSA', sede='ITS', materie=['JS', 'HTML', 'CSS']){
    let presentazione = `Il corso ${titolo} si tiene presso ${sede} e tratta le seguenti materie: ${materie.join(', ')}`;
    console.log(presentazione);
    return presentazione;
}

console.log(presentaCorso());
console.log(presentaCorso('Web Development', 'Online', ['JS', 'HTML', 'CSS', 'React']));

function soloNumeri(...numeri){
    let somma = 0;
    for(let numero of numeri){
        if(typeof numero === 'number'){
            somma += numero;
        }
    }
    return somma;
}

console.log(soloNumeri(5, 10, 15));