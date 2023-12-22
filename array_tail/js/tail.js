// Chiediamo all'utente il numero massimo di elementi da aggiungere ad un array
const totElements = parseInt(prompt("Quanti elementi deve contenere l'array?", 9));
console.log(totElements);

// Creare l'array
const element = [];

// Creo una variabile d'appoggio
let numberElement = 0;

for (let i = 0; i < totElements; i++) {

    // Creo tot numeri casuali da 1 a 100
    numberElement = Math.floor((Math.random() * 100) + 1);

    // Pusho l'elemento nell'array
    element.push(numberElement);

}

console.log(element);



// Stampo gli ultimi 5 elementi dell'array
const lastFive = [element[element.length - 5],
element[element.length - 4],
element[element.length - 3], 
element[element.length - 2], 
element[element.length - 1], ];
console.log(lastFive);