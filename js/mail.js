// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: 
// Non è necessario provvedere alla validazione delle email


//creazione array mail registrate sul portale
const mail = [
    "franscescofava@gmail.com",
    "lucaesposito@libero.it",
    "noemilucciola@gmail.com",
    "alessandroverdi@yahoo.it",
]
console.log(mail);
//booleano per capire se ha trovato o meno la mail
let find = false;

//facciamo inserire all'utente la propria mail per verificare se presente in lista
const userMail = prompt("Inserisci la tua E-mail");

//controllo elementi lista tramite ciclo for
for (let i = 0; i < mail.length; i++) {
    if (mail[i] === userMail) {
        find = true;
        }
}

//verifica se la mail è presente sulla lista
if (find === true) {
    console.log("La mail" , userMail , "è presente sulla lista, può entrare!");
} else {
     console.log("La mail" , userMail , "non è presente sulla lista, non può entrare.");
}








