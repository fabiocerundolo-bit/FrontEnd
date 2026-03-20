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
// Funzione che esegue un'operazione matematica generica passata come callback
function esegueOperazione(a, b, operazione) {
    // Chiamiamo la callback 'operazione' con gli argomenti 'a' e 'b'
    return operazione(a, b);
}

// Esempi con operazioni anonime (callback arrow function)
console.log(esegueOperazione(5, 10, (a, b) => a + b)); // Somma
console.log(esegueOperazione(5, 10, (a, b) => a * b)); // Moltiplicazione
console.log(esegueOperazione(5, 10, (a, b) => a - b)); // Sottrazione
console.log(esegueOperazione(5, 10, (a, b) => a / b)); // Divisione

// Funzione che esegue un'operazione e fornisce il risultato ad una callback
function esegueOperazioneConCallback(a, b, operazione, callback) {
    const risultato = operazione(a, b);
    callback(risultato);
}

// Uso della funzione con callback per ricevere il risultato
esegueOperazioneConCallback(5, 10, (a, b) => a + b, (risultato) => {
    console.log(`Il risultato della somma è: ${risultato}`);
});

// Utilizzo di callback per gestire errori con try/catch
function esegueOperazioneConErrore(a, b, operazione, callback) {
    try {
        const risultato = operazione(a, b);
        callback(null, risultato); // nessun errore, fornisci risultato
    } catch (error) {
        callback(error, null); // errore, fornisci il messaggio di errore
    }
}

// Esempio con divisione: la divisione per zero genera un errore
esegueOperazioneConErrore(5, 0, (a, b) => {
    if (b === 0) throw new Error('Divisione per zero');
    return a / b;
}, (error, risultato) => {
    if (error) {
        console.error('Si è verificato un errore:', error.message);
    } else {
        console.log(`Il risultato della divisione è: ${risultato}`);
    }
});

// setTimeout con callback per operazioni asincrone temporali
setTimeout(() => {
    console.log('Questo messaggio viene visualizzato dopo 3 secondi');
}, 3000);

// setInterval + clearInterval per eseguire codice ripetuto e poi fermarsi
let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(`Counter: ${counter}`);
    if (counter >= 5) {
        clearInterval(intervalId);
        console.log('Intervallo cancellato dopo 5 incrementi');
    }
}, 1000);

// Array e forEach: callback per ogni elemento
let nomi1 = ['Anna', 'Marco', 'Luca'];
nomi1.forEach((nome, index) => {
    // imprime messaggio per ogni nome presente nell'array
    console.log(`Ciao ${nome}, sei il numero ${index + 1} nella lista`);
});


let nomi = ['Anna', 'Marco', 'Luca'];
let cognomi = ['Rossi', 'Bianchi', 'Verdi'];
// Utilizzo di map con callback per creare un nuovo array di nomi completi
let nomiCompleti = nomi.map((nome, index) => `${nome} ${cognomi[index]}`);
console.log(nomiCompleti);

nomi.filter((nome) => nome.startsWith('A')).forEach((nome) => {
    console.log(`Ciao ${nome}, il tuo nome inizia con A!`);
});


let ricerca= nomi.find((nome) => nome === 'Marco');
if (ricerca) {
    console.log(`Trovato: ${ricerca}`);
} else {
    console.log('Non trovato');
}