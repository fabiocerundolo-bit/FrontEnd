// Variabili di gioco
let msg = "";
let level = 1;
let pianiVisitati = [1];
let obiettivi = [];
let messaggioBenvenutoMostrato = false;

// Configurazione dei piani
const piani = {
    0: { nome: "Piano 0", descrizione: "Il seminterrato misterioso", segreto: true },
    1: { nome: "Piano 1", descrizione: "L'ingresso della torre", colore: "verde" },
    2: { nome: "Piano 2", descrizione: "La sala dei tesori", colore: "oro" },
    3: { nome: "Piano 3", descrizione: "La biblioteca incantata", colore: "blu" },
    4: { nome: "Piano 4", descrizione: "La terrazza panoramica", colore: "azzurro" },
    5: { nome: "Piano 5", descrizione: "La stanza del guardiano", colore: "rosso" },
    6: { nome: "Piano 6", descrizione: "Il tetto segreto", segreto: true }
};

function aggiornaTorre() {
    const tower = document.getElementById('tower');
    tower.innerHTML = '';

    for (let i = 0; i <= 6; i++) {
        const floor = document.createElement('div');
        floor.className = 'floor';

        // Aggiungi classi speciali
        if (i === level) {
            floor.classList.add('current');
        }
        if (i === 6 && level !== 6) {
            floor.classList.add('special');
            floor.title = "Piano Misterioso!";
        }

        floor.innerHTML = `
            <span class="floor-number">${i}</span>
            <span class="floor-label">${piani[i].nome || 'Piano'}</span>
        `;

        floor.onclick = (function(piano) {
            return function() {
                gestisciClickPiano(piano);
            };
        })(i);

        tower.appendChild(floor);
    }
}

function gestisciClickPiano(piano) {
    if (piano === level) {
        mostraMessaggio(`Sei già al piano ${piano}!`);
    } else if (piano < level) {
        mostraMessaggio(`Non puoi tornare indietro! Sei al piano ${level}`);
    } else {
        saltaAPiano(piano);
    }
}

function saltaAPiano(piano) {
    const vecchioLivello = level;

    // Simula lo switch per raggiungere il piano desiderato
    while (level < piano && level <= 6) {
        eseguiSwitchStep();
    }

    if (level === piano) {
        mostraMessaggio(`✨ Sei saltato al piano ${piano}!`);
    } else {
        mostraMessaggio(`Non puoi saltare direttamente al piano ${piano}...`);
        level = vecchioLivello;
    }

    aggiornaUI();
}

function eseguiSwitchStep() {
    const vecchioLevel = level;

    switch (level) {
        case 0:
            console.log("Level 1");
            level = 2;
            aggiungiObiettivo("Hai scoperto il seminterrato!");
            break;
        case 1:
            console.log("Level 2");
            level = 3;
            aggiungiObiettivo("Benvenuto al piano principale!");
            break;
        case 2:
            console.log("Level 3");
            level = 4;
            aggiungiObiettivo("Hai trovato un tesoro! +100 punti");
            break;
        case 3:
            console.log("Level 4");
            level = 5;
            aggiungiObiettivo("Sei entrato nella biblioteca magica!");
            break;
        case 6:
            console.log("Level 5");
            level = 6;
            aggiungiObiettivo("🎉 HAI RAGGIUNTO IL TETTO SEGRETO! 🎉");
            mostraMessaggio("🏆 COMPLIMENTI! Hai completato la torre! 🏆");
            break;
    }

    if (level !== vecchioLevel) {
        if (!pianiVisitati.includes(level)) {
            pianiVisitati.push(level);
        }
        mostraMessaggio(getMessaggioPiano(level));
    }
}

function saliPiano() {
    if (level === 6) {
        mostraMessaggio("Sei già all'ultimo piano! Premi 'Ricomincia' per rigiocare.");
        return;
    }
    eseguiSwitchStep();
    aggiornaUI();
}

function getMessaggioPiano(piano) {
    const messaggi = {
        0: "🏚️ Sei nel seminterrato... È buio e misterioso!",
        1: "🚪 Benvenuto all'ingresso della torre!",
        2: "💰 Wow! Hai trovato una stanza piena d'oro!",
        3: "📚 La biblioteca è piena di libri antichi...",
        4: "🌅 Che vista magnifica dalla terrazza!",
        5: "👑 Sei nella stanza del guardiano!",
        6: "🎉 Sei sul tetto! La vista è spettacolare!"
    };
    return messaggi[piano] || `Sei al piano ${piano}`;
}

function aggiungiObiettivo(obiettivo) {
    obiettivi.push(obiettivo);
    document.getElementById('obiettiviTrovati').textContent = obiettivi.length;

    const achievement = document.getElementById('achievement');
    achievement.style.display = 'block';
    achievement.textContent = `🏆 ${obiettivo}`;

    setTimeout(() => {
        achievement.style.display = 'none';
    }, 3000);
}

function mostraMessaggio(messaggio) {
    document.getElementById('messageBox').innerHTML = `📢 ${messaggio}`;
}

function aggiornaUI() {
    document.getElementById('currentLevelDisplay').textContent = level;
    document.getElementById('pianiEsplorati').textContent = pianiVisitati.length;

    if (level === 6) {
        document.getElementById('pianoSegreto').textContent = "SCOPERT0! 🎉";
    }

    aggiornaTorre();
}

function resettaGioco() {
    level = 1;
    pianiVisitati = [1];
    obiettivi = [];

    document.getElementById('currentLevelDisplay').textContent = level;
    document.getElementById('pianiEsplorati').textContent = 1;
    document.getElementById('obiettiviTrovati').textContent = 0;
    document.getElementById('pianoSegreto').textContent = "???";
    document.getElementById('messageBox').innerHTML = "🔄 Gioco resettato! Ricominciamo dall'inizio!";

    aggiornaTorre();
}

function mostraIndizio() {
    const indizi = [
        "💡 Il seminterrato (piano 0) esiste, ma come ci arrivi?",
        "💡 Ogni piano ha un numero specifico...",
        "💡 C'è un salto misterioso dal piano 0 al 2...",
        "💡 Il piano 6 è segreto! Come ci arrivi?",
        "💡 Prova a cercare il seminterrato...",
        "💡 Forse devi tornare indietro per andare avanti...",
        "💡 Il numero 6 è speciale, ma come raggiungerlo?"
    ];

    const indizioCasuale = indizi[Math.floor(Math.random() * indizi.length)];
    document.getElementById('hintText').innerHTML = `💭 ${indizioCasuale}`;
}

// Inizializza il gioco quando la pagina è caricata
document.addEventListener('DOMContentLoaded', function() {
    aggiornaTorre();

    // Mostra un messaggio di benvenuto dopo 1 secondo
    setTimeout(() => {
        if (!messaggioBenvenutoMostrato) {
            mostraMessaggio("🌟 Clicca sui piani o usa il bottone per salire! Il piano 6 è segreto...");
            messaggioBenvenutoMostrato = true;
        }
    }, 1000);
});