 /**Closure*/
function esterna() {
    let saluto = "Ciao";
    function interna() {
        console.log(saluto);
    }
    return interna;
}

let chiusura = esterna();
chiusura();

//Esempio di closure con contatore
function contatore() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
    return contatore;
}
let cont = contatore();
console.log(cont()); // 1
console.log(cont()); // 2
console.log(cont()); // 3
console.log(cont()); // 4
console.log(cont()); // 5
console.log(cont()); // 6

//Esempio con parametri
function saluto(nome) {
    return function() {
        console.log(`Ciao, ${nome}!`);
    }
}
let salutoMario = saluto("Mario");
salutoMario(); // Ciao, Mario!

function moltiplicatore(fattore) {
    return function(numero) {
        return numero * fattore;
    }
}
let raddoppia = moltiplicatore(2);
console.log(raddoppia(5)); // 10
let triplica = moltiplicatore(3);
console.log(triplica(5)); // 15

//Esempio di closure con setTimeout
function ritardoSaluto(nome) {
    setTimeout(function() {
        console.log(`Ciao, ${nome}!`);
    }, 1000);
}
ritardoSaluto("Luca"); // Dopo 1 secondo, stampa "Ciao, Luca!"

//Esempio oggetto con closure
function Contatore() {
    let count = 0;
    return {
        incrementa: function() {
            count++;
            console.log(count);
        },
        decrementa: function() {
            count--;
            console.log(count);
        },
        reset: function() {
            count = 0;
            console.log(count);
        }
    }
}
let mioContatore = Contatore();
mioContatore.incrementa(); // 1
mioContatore.incrementa(); // 2
mioContatore.decrementa(); // 1
mioContatore.reset(); // 0