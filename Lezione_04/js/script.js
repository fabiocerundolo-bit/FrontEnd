/**
 * Operatori di confronto
 *
 * */

let numeri = [1, 9,5, 12, 8, 99,4 ,32, 5, 4];

let numeroDaCecare = 4;

for(let i = 0; i <numeri.length; i++) {
    if(numeri[i] ==numeroDaCecare){
        console.log(numeroDaCecare);
        break;
    }
}


for(let i = 0; i < numeri.length; i++) {
    if(numeri[i] % 2 == 0){
        console.log(`I numeri pari sono: ${numeri[i]}`);
        continue;
    }
}