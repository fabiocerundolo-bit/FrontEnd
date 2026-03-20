//Callback functions are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. They are commonly used in asynchronous programming to handle tasks that take time to complete, such as fetching data from an API or reading a file.

//Example of a callback function
function saluta(nome, callback) {
    console.log(`Ciao ${nome}`);
    callback();
}
function dopoSaluto() {
    console.log('Questo è un callback function');
}
saluta('Anna', dopoSaluto);

//Example of a callback function with setTimeout
function salutaDopoTempo(nome, tempo) {
    setTimeout(() => {
        console.log(`Ciao ${nome}`);
    }, tempo);
}
salutaDopoTempo('Marco', 2000); // Saluta Marco dopo 2 secondi

//Example of a callback function with an API call (simulated with setTimeout)
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(data);
    }, 3000); // Simula un ritardo di 3 secondi per il recupero dei dati
}
function processData(data) {
    console.log('Dati ricevuti:', data);
}
fetchData(processData);

//Callback function anonime
saluta('Luca', function() {
    console.log('Questo è un callback function anonima');
});

// Esempio con bottone in callback.html già dopo che il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    if (btn) {
        btn.addEventListener('click', function() {
            saluta('Visitatore', function() {
                console.log('Callback eseguito dopo il saluto sul click');
                alert('Hai cliccato il bottone!');
            });
        });
    } else {
        console.warn('Bottone #btn non trovato in callback.html');
    }
});
function esegueOperazione(a, b, operazione) {
    return operazione(a, b);
}

console.log(esegueOperazione(5, 10, (a, b) => a + b)); // Esegue l'operazione di somma
console.log(esegueOperazione(5, 10, (a, b) => a * b)); // Esegue l'operazione di moltiplicazione
console.log(esegueOperazione(5, 10, (a, b) => a - b)); // Esegue l'operazione di sottrazione
console.log(esegueOperazione(5, 10, (a, b) => a / b)); // Esegue l'operazione di divisione

function esegueOperazioneConCallback(a, b, operazione, callback) {
    const risultato = operazione(a, b);
    callback(risultato);
}

esegueOperazioneConCallback(5, 10, (a, b) => a + b, (risultato) => {
    console.log(`Il risultato della somma è: ${risultato}`);
});

//Utilizzo di callback per gestire errori
function esegueOperazioneConErrore(a, b, operazione, callback) {
    try {
        const risultato = operazione(a, b);
        callback(null, risultato);
    } catch (error) {
        callback(error, null);
    }
}

esegueOperazioneConErrore(5, 0, (a, b) => a / b, (error, risultato) => {
    if (error) {
        console.error('Si è verificato un errore:', error.message);
    } else {
        console.log(`Il risultato della divisione è: ${risultato}`);
    }
});

setTimeout(() => {
    console.log('Questo messaggio viene visualizzato dopo 3 secondi');
}, 3000);