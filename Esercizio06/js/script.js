// JavaScript per Esercizio06

// ============================================
// ESERCIZIO 1: Funzione con variabile interna
// ============================================

function stampaVariabileLocale() {
    // Variabile dichiarata dentro la funzione (scope locale)
    let messaggio = "Questa è una variabile locale dentro la funzione";
    console.log("Valore variabile locale:", messaggio);
    return messaggio;
}

// Richiamo la funzione
stampaVariabileLocale();
// Output: "Valore variabile locale: Questa è una variabile locale dentro la funzione"


// ============================================
// ESERCIZIO 2: Variabile globale e funzione
// ============================================

// Richiamo la funzione PRIMA della dichiarazione della variabile
// Questo causa un errore perché la variabile non esiste ancora
console.log("\n=== CHIAMATA PRIMA della variabile ===");
try {
    stampaVariabileGlobalePrima();
} catch (e) {
    console.log("Errore:", e.message);
}

// Dichiarazione della variabile globale
let variabileGlobale = "Sono una variabile globale!";

// Richiamo la funzione DOPO la dichiarazione della variabile
console.log("\n=== CHIAMATA DOPO la variabile ===");
stampaVariabileGlobaleDopo();

// Funzione che stampa la variabile globale
function stampaVariabileGlobaleDopo() {
    console.log("Valore variabile globale:", variabileGlobale);
}

// Questa funzione tenta di accedere alla variabile prima che esista
function stampaVariabileGlobalePrima() {
    console.log("Tento di accedere a:", variabileGlobale);
}


// ============================================
// CONCLUSIONE
// ============================================
console.log("\n=== SPIEGAZIONE ===");
console.log("1. Quando chiamiamo la funzione PRIMA della dichiarazione della variabile,");
console.log("   otteniamo un errore perché la variabile non esiste ancora nel momento");
console.log("   in cui la funzione cerca di leggerla.");
console.log("\n2. Quando chiamiamo la funzione DOPO la dichiarazione della variabile,");
console.log("   tutto funziona correttamente perché la variabile esiste ed è accessibile.");
console.log("\n3. Le funzioni in JavaScript sono 'hoisted' (sollevate), ma le variabili");
console.log("   dichiarate con 'let' e 'const' non sono accessibili prima della loro");
console.log("   dichiarazione ( Temporal Dead Zone ).");


document.addEventListener('DOMContentLoaded', function() {
    console.log('\nEsercizio06 caricato correttamente!');
});