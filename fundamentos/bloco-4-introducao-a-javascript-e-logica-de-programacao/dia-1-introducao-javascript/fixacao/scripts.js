// Exercício de fixação - 1

// const myName = "Juan";
// const birthCity = "Natal";
// let birthYear = 1989;
// birthYear = 2030;

// console.log("Meu nome é,", myName, ", nasci em", birthCity, "em", birthYear);

// Exercício de fixação - 2

// const base = 5;
// let height = 8;
// const area = base * height;
// const perimeter = ((base*2) + (height*2));

// console.log("base: ", base);
// console.log("altura: ", height);
// console.log("area: ", area);
// console.log("Perímetro: ", perimeter);

// Exercício de fixação - 3
/*
const notaCanditada = 59;

if (notaCanditada >= 80) {
    console.log("Parabéns, você foi aprovada(o)");

}else if (notaCanditada >= 60){
    console.log("Você está na nossa lista de espera");

}else {
    console.log("Você foi reprovada(o)");
}
*/
// Exercício de fixação - 4 - Condição &&
/*
const currentHour = 1;
let message = "";

if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
    console.log(message);

}else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
    console.log(message);
}else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
    console.log(message);

}else if (currentHour > 11 && currentHour < 14){
    message = "Horá do almoço!!!";
    console.log(message);

}else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de cafŕ recém passado";
    console.log(message);
}else {
    message = "Soninho!!!";
    console.log(message);
}
*/

// Exercício de fixação - 5 - Condição ||
/*
let weekDay = "segunda-feira"

if (weekDay === "segunda-feira" || weekDay === "tercça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");

}else {
    console.log("FINALMENTE, descanso merecido UwU");
}
*/
/*
console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);
*/

// Exercício de fixação - 6 - Condição ||

let pessoaCandidata = "aprovada";

switch (pessoaCandidata) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)");
        break;
    
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;

    default:
        console.log("não se aplica");        
}

/*
Tipos primitivos

tipos de referencia e o tipo de valores
*/

// let movie = "Avengers"; //string liretal
// let score = 10.89; //number literal
// let isValid = true; //boolean
// let name; //undefined
// let color = null; //aguardando redefinição de valor

// let salary = 3500;

// salary++;

// console.log(salary);

// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientAge);

// console.log(typeof patientId);