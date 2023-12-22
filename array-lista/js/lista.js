// Creo l'array
const fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(fridge);

// Aggiungo la pesca all'array
fridge.push('pesca');
console.log(fridge);

// Verifico se nell'array di frutta c'è il cocomero
let message = "C'è il cocomero in frigo? ";

let peachIntoFridge = false;

for (let i = 0; i < fridge.length && !peachIntoFridge; i++) {

    //Validazione
    if (fridge[i] === 'cocomero') {
        peachIntoFridge = true;
    }

}

    if (peachIntoFridge) {
        message += 'Trovato! Devo solo preparare il cocktail.'
    } else {
        message += 'Oh no, devo uscire a comprare il cocomero!'
    }

console.log(message);