// ====== Tipi di dato ========
//Number
let numero= 5;
//String
let parola = "Ciao";
// Boolean
let presenza = true;



// Esempio sulla tipizazione debole
let num1 = 10;
let num2 = 3;

let somma=Number(num1)+Number(num2);
let diff =num1-num2;
let prod =num1*num2;
let quoz =num1/num2;

console.log("======Operazioni======");
console.log(`Somma:  ${somma}`);
console.log(`Differenza: ${diff}`);
console.log(`Prodotto: ${prod}`);
console.log(`Quoziente: ${quoz}`);

/**Esempio : Raccogli due numeri con il prompt e calcola i valore delle 4 operazioni
 * 
*/
let num3 = Number(prompt("Inserisci il primo numero"));
console.log(typeof num3);

let num4 = Number(prompt("Inserisci il secondo numero"));
console.log(typeof num4);

let somma2=num3+num4;
let diff2 =num3-num4;
let prod2 =num3*num4;
let quoz2 =num3/num4;

console.log("======Operazioni======");
console.log(`Somma:  ${somma2}`);
console.log(`Differenza: ${diff2}`);
console.log(`Prodotto: ${prod2}`);
console.log(`Quoziente: ${quoz2}`);
let numeri = document.getElementById("numeri");
console.log(numeri);
console.log(typeof numeri);

numeri.innerHTML = `Hai scelto i seguenti numeri: ${num3} e ${num4}`

let operazioni = document.getElementById("operazioni");
operazioni.innerHTML = `<li> Somma ${somma2}`;
operazioni.innerHTML += `<li> Prodotto ${prod2}`;
operazioni.innerHTML += `<li> Differenza ${diff2}`;
operazioni.innerHTML += `<li> Quoziente ${quoz2}`;


