// Console lo strumento base che noi sviluppatori usiamo per controlare il nostro codice
// Console è anche REPL --> read - execute - print loop
// console.log("ciao");

// Dichiarazione
// let username;

// Dichiarazione con inizializzazione
let username = "Pippo";

// console.log(username);

// assegnamento di un valore
username = "Pluto";

// console.log(username);

////////////////////
// CONST
///////////////////
// console.log(piGreco); // NON lo posso fare perché lo uso prima della sua dichiaraizone

const piGreco = 3.14;

//////////////
// VAR - modalità obsoleta che non usiamo più
/////////////
// var myVariable;
// console.log(myVariable); // posso usare la variabile prima della sua dichiazione ---> var è soggetto al hoisting

/*
Commento con
diverse righe
*/
// 
// var myVariable = "variabile con var";
// console.log(myVariable);
// myVariable = "Nuovo valore";
// console.log(myVariable);


// let lastname = "Demina";
const userAge = 29;
let miaVariabileConIlNomeMoltoLungo;

let var1;

/////////////////
// TIPI DI DATI
/////////////////

// STRINGHE
const stringVar1 = 'Ciao';
// const stringVar2 = "Che bello l'albero";
const stringVar2 = 'Che bello l\'albero';

const stringVar3 = 'mondo';

console.log(stringVar1);

// Concatenazione tra stringhe
const result1 = stringVar1 + " " + stringVar3;
console.log(result1);

const firstname = "Pippo";
const lastname = "Verdi";

// Questo è il procedimento troppo lungo, possiamo utilizzare dei backtick - template literal
// const result2 = "Lo studente " + firstname + " " + lastname + " è molto bravo";
// console.log(result2);

const result2 = `Lo studente ${firstname} ${lastname} è molto bravo`;
console.log(result2);

// NUMBERS
const number1 = 15; // number
const number2 = 34; // number

const result3 = number1 + number2;
console.log(result3);

const numberString = "15"; // string

//               number     string
const result4 = number2 + numberString; // string
console.log(result4);

const numberNumber = parseInt(numberString) // number
console.log(numberNumber, typeof numberNumber);
console.log(numberString, typeof numberString);


//               number       number
const result5 = number2 + numberNumber; // number
console.log(result5);


const stringFloat = "34.67";
console.log(parseFloat(stringFloat));


console.log(number2.toString());


const number3 = 10.44534534534;
console.log(number3.toFixed(4));

////////////////////

