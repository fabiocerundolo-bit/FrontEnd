/*
Wordle semplificato "solo funzioni".
- 5 lettere
- 6 tentativi
- feedback: corretta (verde), posizione (giallo), sbagliata (grigio)
*/

function getParoleValide() {
    return ['AMORE', 'CUORE', 'MANGO', 'PIZZA', 'CANEI', 'SOGNO', 'LIBRO', 'GATTO', 'CASEI', 'LEONE'];
}

function scegliParolaSegreta() {
    const parole = getParoleValide();
    const indice = Math.floor(Math.random() * parole.length);
    return parole[indice];
}

function normalizza(text) {
    return text.trim().toUpperCase();
}

function isValidGuess(guess) {
    return /^[A-Z]{5}$/.test(normalizza(guess));
}

function valutaTentativo(guess, soluzione) {
    const risultato = [];
    const solArray = soluzione.split('');
    const guessArray = guess.split('');

    // mark corrette prima
    for (let i = 0; i < 5; i++) {
        if (guessArray[i] === solArray[i]) {
            risultato[i] = { lettera: guessArray[i], stato: 'corretta' };
            solArray[i] = null;
            guessArray[i] = null;
        }
    }

    // mark posizione / sbagliata
    for (let i = 0; i < 5; i++) {
        if (guessArray[i] === null) continue;
        const pos = solArray.indexOf(guessArray[i]);
        if (pos !== -1) {
            risultato[i] = { lettera: guessArray[i], stato: 'posizione' };
            solArray[pos] = null;
        } else {
            risultato[i] = { lettera: guessArray[i], stato: 'sbagliata' };
        }
    }

    return risultato;
}

function creaGriglia() {
    const board = document.createElement('div');
    board.id = 'wordle-board';
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(5, 40px)';
    board.style.gridGap = '5px';
    board.style.maxWidth = '220px';
    board.style.marginTop = '12px';

    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 5; c++) {
            const cell = document.createElement('div');
            cell.className = 'wordle-cell';
            cell.style.width = '40px';
            cell.style.height = '40px';
            cell.style.display = 'flex';
            cell.style.alignItems = 'center';
            cell.style.justifyContent = 'center';
            cell.style.border = '1px solid #aaa';
            cell.style.fontWeight = 'bold';
            cell.style.fontSize = '18px';
            cell.style.textTransform = 'uppercase';
            board.appendChild(cell);
        }
    }

    document.body.appendChild(board);
}

function setCell(riga, colonna, lettera, stato) {
    const index = riga * 5 + colonna;
    const cell = document.querySelectorAll('#wordle-board .wordle-cell')[index];
    if (!cell) return;
    cell.textContent = lettera;
    if (stato === 'corretta') cell.style.backgroundColor = '#6aaa64';
    if (stato === 'posizione') cell.style.backgroundColor = '#c9b458';
    if (stato === 'sbagliata') cell.style.backgroundColor = '#787c7e';
    cell.style.color = '#fff';
    cell.style.border = '1px solid #999';
}

function setMessage(msg, isError) {
    const msgEl = document.getElementById('wordle-message');
    if (!msgEl) return;
    msgEl.textContent = msg;
    msgEl.style.color = isError ? 'red' : 'green';
}

function gestisciInvio(event, statoGioco) {
    if (event && event.preventDefault) event.preventDefault();
    const input = document.getElementById('wordInput');
    if (!input) return;

    const guess = normalizza(input.value);
    if (!isValidGuess(guess)) {
        setMessage('Parola non valida. Usa 5 lettere alfabetiche.', true);
        return;
    }

    const feedback = valutaTentativo(guess, statoGioco.soluzione);
    const riga = statoGioco.tentativi;

    feedback.forEach((cell, idx) => setCell(riga, idx, cell.lettera, cell.stato));

    statoGioco.tentativi++;

    if (guess === statoGioco.soluzione) {
        setMessage(`Complimenti! Hai indovinato in ${statoGioco.tentativi} tentativi.`, false);
        statoGioco.finito = true;
        return;
    }

    if (statoGioco.tentativi >= 6) {
        setMessage(`Hai perso. Soluzione: ${statoGioco.soluzione}`, true);
        statoGioco.finito = true;
        return;
    }

    setMessage(`Tentativi: ${statoGioco.tentativi}/6`, false);
    input.value = '';
    input.focus();
}

function initWordle() {
    const titolo = document.createElement('h1');
    titolo.textContent = 'Worlde (puro JavaScript funzioni)';
    document.body.insertBefore(titolo, document.body.firstChild);

    const messaggio = document.createElement('div');
    messaggio.id = 'wordle-message';
    messaggio.style.marginTop = '10px';

    document.body.appendChild(messaggio);

    const input = document.getElementById('wordInput');
    const button = document.getElementById('submitBtn');

    if (!input || !button) {
        setMessage('Non sono presenti input/bottone nella pagina.', true);
        return;
    }

    creaGriglia();

    const statoGioco = {
        soluzione: scegliParolaSegreta(),
        tentativi: 0,
        finito: false
    };

    button.addEventListener('click', (event) => {
        if (statoGioco.finito) return;
        gestisciInvio(event, statoGioco);
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (statoGioco.finito) return;
            gestisciInvio(event, statoGioco);
        }
    });

    setMessage('Inizia a giocare! Hai 6 tentativi.', false);
}

window.addEventListener('DOMContentLoaded', initWordle);
