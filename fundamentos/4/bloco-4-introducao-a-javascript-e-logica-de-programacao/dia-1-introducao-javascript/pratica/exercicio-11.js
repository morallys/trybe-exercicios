// Cria variáveis globais

let salario = 5500;
let inss = 0;
let ir = 0;
let salarioBase = 0;
let salarioLiq;
let deducao;

// Testa % de INSS a ser descontado

if (salario <= 1556.94){
    inss = 0.08;
    
}else if (salario >= 1556.95 && salario <= 2594.92){
    inss = 0.09;      
    
}else if (salario >= 2594.93 && salario <= 5189.82 ){
    inss = 0.11;

}else if (salario > 5198.82) {
    inss = 570.88

}else if (salario < 0) {
    console.error("Valor inválido");
}

// Testa se inss é % ou número inteiro

if (inss > 1) {
    salarioBase = salario - inss;

}else {
    salarioBase = salario - (salario * inss);
}

// Testa % de Imposto de Renda e dedução a ser descontados

if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = 0.075;
    deducao = 142.80;

}else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    ir = 0.15;
    deducao = 354.80;

}else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    ir = 0.225;
    deducao = 636.13;

}else if (salarioBase > 4664.68) {
    ir = 0.275;
    deducao = 869.36;

}else if (salario < 0) {
    console.error("Valor inválido");}

// Faz cálculo geral pra mostrar o salário líquido final testando se o IR ainda é 0 (devido ao primeiro e segundo caso de salário < 1903,98)

if (ir === 0){
    salarioLiq = salarioBase;

}else{
    salarioLiq = salarioBase - ((salarioBase * ir) - deducao);

}

// Imprime salário líquido final

console.log("Salário líquido:", salarioLiq.toFixed(2));