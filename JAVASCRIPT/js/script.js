console.log("Hello, Wolrd!");
console.log("Ciao a tutti, Benvenuti al corso WSA");

alert("Questo è un alert");

//Commento riga singola
/**
 *  Commwnto multiriga
 */

// ========== VARIABILE===============

let miaVaraibile = "Web Solution architect";

let tuaVariabile;

tuaVariabile = "ITS piazza dei mestieri";

/*
                           .
                          /|\
                         / | \
                        /  |  \
                       /   |   \
                      /    |    \
                     /     |     \
                    /      |      \
                   /       |       \
                  /        |        \
                 /         |         \
                /     /         \     \
               /    /             \    \
              /   /                 \   \
             /  /                     \  \
            / /                         \ \
           //                             \\
          /                                 \
         /___________________________________\

          █████╗ ██████╗  ██████╗██╗  ██╗
         ██╔══██╗██╔══██╗██╔════╝██║  ██║
         ███████║██████╔╝██║     ███████║
         ██╔══██║██╔══██╗██║     ██╔══██║
         ██║  ██║██║  ██║╚██████╗██║  ██║
         ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝

                  btw i use arch

*/

let miaETA = 32;
console.log("Oggi ho " + miaETA + "anni");

console.log("L'anno prossimo avrò " + (miaETA + 1) + "anni");

let username = prompt("Come ti chiami?");
console.log("Benvemut* nalla nostra pagina, " + username);

//Concatenzione di strighe

let mioNome = "Luigi";
let mioCognome = "Grinaldi";
let corso = "WSA";
let sede = "Piazza dei mestieri";
let studenti = 32;
let benvenuto = "Ciao, sono "+ mioNome + mioCognome + "ho " + miaETA;
console.log(benvenuto);

//backtick ALT + 96

let benvenuto2 = `Ciao sono ${mioNome} ${mioCognome} ho ${miaETA} anni e studio presso ${corso}`;
console.log(benvenuto2);

let presentazione = `Ciao benvenuti in ${sede}`;
console.log(presentazione);





