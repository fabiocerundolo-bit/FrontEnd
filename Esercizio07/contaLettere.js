/**
 * Conta il numero di occorrenze di una lettera in una stringa
 * @param {string} stringa - La stringa da analizzare
 * @param {string} lettera - La lettera da cercare
 * @returns {number} - Il numero di occorrenze
 */
function contaOccorrenze(stringa, lettera) {
    // Verifica che gli argomenti siano validi
    if (typeof stringa !== 'string' || typeof lettera !== 'string') {
        console.error('Errore: entrambi gli argomenti devono essere stringhe');
        return 0;
    }
    
    // Verifica che la lettera sia un singolo carattere
    if (lettera.length !== 1) {
        console.error('Errore: la lettera deve essere un singolo carattere');
        return 0;
    }
    
    let conteggio = 0;
    
    // Scorre ogni carattere della stringa
    for (let i = 0; i < stringa.length; i++) {
        // Confronto case-insensitive
        if (stringa[i].toLowerCase() === lettera.toLowerCase()) {
            conteggio++;
        }
    }
    
    return conteggio;
}

// Esempi di utilizzo
console.log('Test 1:', contaOccorrenze("Ciao mondo", "o"));
// Output: 2 ("o" appare in "mondo" due volte)

console.log('Test 2:', contaOccorrenze("Programmazione", "a"));
// Output: 2 ("a" appare due volte)

console.log('Test 3:', contaOccorrenze("JavaScript", "J"));
// Output: 1 (case-insensitive, trova "J" maiuscola)

console.log('Test 4:', contaOccorrenze("Hello World", "z"));
// Output: 0 (lettera non trovata)
