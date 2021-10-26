const numbers = [1, 2, 3];

const newArray = [0, ...numbers, 4, 5, 6];
// console.log(newArray);
// console.log(numbers);

// ---------------------------------

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);

// ----------------------------------

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);

const patientInfo = [84, 1.79];

// console.log(imc(...patientInfo));

// ----------------------------------

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// ----------------------------------

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
// console.log(customer);

// -----------------------------------