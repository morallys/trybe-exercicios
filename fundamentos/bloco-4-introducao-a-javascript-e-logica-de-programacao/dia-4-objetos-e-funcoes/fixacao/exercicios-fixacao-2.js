/*
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    bestInTheWorld:  [2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
        golden: 2,
        silver: 3
    }
}

for (const key in player.bestInTheWorld) {
    console.log(key, ' ', player.bestInTheWorld[key]);
}
*/

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge'
// };

// for (const key in names) {

//     console.log('Olá, ' + names[key]);
// }

// let car ={
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
// };

// for (const key in car) {
   
//     console.log(key +": " + car[key]);
// }

/* ============= Exercícios Funções ===============

function addition(num1, num2) {
    
    return (num1 + num2);
}

function subtraction(num1, num2) {
    
    return (num1 - num2);
}

function multiplication(num1, num2) {
    
    return (num1*num2);
}

function division(num1, num2) {

    if((num1&&num2) != 0){

        return (num1/num2);
    }    
}

function module(num1, num2) {
    return (num1%num2);
}

console.log(addition(2, 2));
console.log(subtraction(4,2));
console.log(multiplication(4,5));
console.log(division(20,5));
console.log(module(10,4));
*/

function bigger(num1, num2) {
    if (num1 > num2){
        return console.log("A é maior que B");
    
    }else if (num1 === num2){
        return console.log("A é igual a B");
    
    }else{
        return console.log("B é maior que A");
    }
}

bigger(6, 5);
