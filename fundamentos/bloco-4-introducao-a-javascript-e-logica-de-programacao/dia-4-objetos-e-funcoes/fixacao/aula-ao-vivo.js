/**
 * Explicações sobre aula-aovivo
 * 
 * ======== Objeto JavaScript ========
 *      
 *     OBS: ==== OBJETO JS NÃO TEM NADA A VER COM PROGRAMAÇÃO ORIENTADA A OBJETOS ====
 * 
 * - Para criar uma nova entrada:
 *      
 *      person.adress.city = "Parnamirim".
 * 
 *      ou com a notação BRACKET
 * 
 *      person["adress"]["cond"]["nameCond"];
 * 
 *      se existir a variável ele atualiza, se não existir ele cria a variável.
 */

let person = {
    firstName: "Juan",
    lastName: "Silva",
    canDrive: true,
    age: 32,
    adress: {
        street: "Rua das Embarcações",
        number: 50,
        district: "Nova Parnamirim",
        cond: {
            nameCond: "Residencial Jangadas",
            block: 13,
            apt: 308
        }
    }
}

/**
 * ======== For In ========
 * 
 * Para imprimir valores dos objetos, utilizando o for seguido do modelo abaixo: 
 * 
 *      for ( let key in person){
 *          console.log(key); // Dessa forma, será impresso as chaves do objeto apenas, sem os valores contidos nele. 
 *      }
 * 
 * Para imprimir os valores das chaves, seguir o modelo abaixo:
 * 
 *      for (let key in person) {
 *          console.log(person[key]);  
 * 
 *      }
 */


/**
 * ======== Function ========
 * 
 *      
 * 
 */

function calculaIRPF(nome, salario){
    let resultadoAPagar = (salario/2) * 3;
    return nome + "você precisa pagar " + resultadoAPagar
}

let resultado = calculaIRPF("Juan", 5800);
console.log(resultado);