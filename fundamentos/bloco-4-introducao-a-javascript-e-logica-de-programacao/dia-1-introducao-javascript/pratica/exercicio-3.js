// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 4;
const b = 3;
const c = 2;

if (a > b && a > c) {
    console.log("A é maior que b e c");

}else if (b > a && b > c) {
    console.log("B é maior que a e c");

}else if (c > a && c > b){
    console.log("C é maior que a e b");

}else {
    console.log("fora de parâmetro");
}