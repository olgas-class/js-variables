// DATI
const monthlySalary = 1000;
const investmentPerc = 5;
const monthsNumber = 12;
const interestRate = 10;

// ESECUZIONE LOGICA
const monthlyRate = monthlySalary / 100 * investmentPerc; // number
const totalInvestment = monthlyRate * monthsNumber; // number
// console.log(totalInvestment);
const totalIncome = totalInvestment / 100 * interestRate; // number
console.log(totalIncome);


// OUTPUT
const totalIncomeString = totalIncome.toFixed(2); // string
const message = `Il rendimento totale è pari a ${totalIncomeString} €`; // string
console.log(message); 


