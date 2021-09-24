// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const a = 90;
const b = 80;
const c = 10;

if (a > 0 && b > 0 && c > 0) {
    if ((a+b+c) > 180 || (a+b+c) < 180){
        console.log("Os ângulos internos não correspondem a um triângulo.");
    }else if((a+b+c) === 180){
        console.log("Isso é um triângulo com lados, ", a, "-", b, "-", c);
    }
}else{
    console.log("Dados inválidos");
}

/*
const a = 90;
const b = 60;
const c = 30;

if (a > 0 && b > 0 && c > 0 && (a+b+c) > 180 || (a+b+c) < 180) {    
    console.log("Não é um triângulo.");    
    
}else if((a+b+c) == 180){
    console.log("Isso é um triângulo com lados, ", a, "-", b, "-", c);

}else{
    console.log("Dados inválidos");
}
*/