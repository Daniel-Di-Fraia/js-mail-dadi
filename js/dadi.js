// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


//facciamo generare al programma 2 numeri uno per l'utente
//e uno per la macchina da 1 a 6, come se fosse un dado
const pcNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = Math.floor(Math.random() * 6) + 1;

console.log("Hai tirato il dado e hai fatto:" , userNumber);
console.log("La macchina ha tirato il dado e ha fatto:" , pcNumber);

//stabiliamo chi ha vinto tramite il numero random
//potreste anche pareggiare
if (userNumber > pcNumber){
    console.log("Complimenti! hai vinto superando il dado della macchina!");
} else if (userNumber === pcNumber){
    console.log("Tu e la macchina avete pareggiato!");
} else {
    console.log("Ah! La macchina ti ha battuto!");
}


