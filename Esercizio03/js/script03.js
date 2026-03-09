    // Richiesta dati tramite prompt
    let nomeCognome = prompt("Inserisci il tuo nome e cognome:");
    let corsoFrequentato = prompt("Inserisci il corso che frequenti:");
    let sedeCorso = prompt("Inserisci la sede del corso:");

    // Inserimento dei valori nei paragrafi usando innerHTML
    document.getElementById("nomeCogn").innerHTML = nomeCognome;
    document.getElementById("corsoFreq").innerHTML = corsoFrequentato;
    document.getElementById("sedeCorso").innerHTML = sedeCorso;