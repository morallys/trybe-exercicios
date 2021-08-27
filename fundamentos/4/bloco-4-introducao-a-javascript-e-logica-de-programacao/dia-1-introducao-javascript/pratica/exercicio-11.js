let salario = 1500.10;
let inss = 0;
let ir = 0;
let salarioLiq = 0;

if (salario <= 1556.94){
    inss = 0.08;
    salarioLiq = salario - (salario * inss);
    console.log("Salário líquido:", salarioLiq);
    
}else if (salario >= 1556.95 && salario <= 2594.92){
    inss = 0.09;
    if (salario >= 1903.99 && salario <= 2826.65) {
        ir = 0.075;
    }
}else if (salario >= 2594.93 && salario <= 5189.82 ){
    inss = 0.11;
    if (salario >= 2826.66 && salario <= 3751.05) {
        ir = 0.15;

    }else if (salario >= 3751.06 && salario <= 4664.68){
        ir = 0.225;

    }else if (salario > 4.664,68) {
        ir = 0.275;
    }

}else if (salario > 5198.82) {
    inss = 570.88

}else{

}