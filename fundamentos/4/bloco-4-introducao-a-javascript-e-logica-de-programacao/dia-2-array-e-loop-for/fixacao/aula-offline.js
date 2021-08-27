/*
    Arrays:
        
        ---------Informações sobre criação de arrays----------

        - Para inserir informação no array sem adicionar o dado diretamente nele, existem algumas formas:
        
        utilizando o índice exato do array:
            Ex:        
                let feira = ["feijão", "arroz", "cuscuz", "carne", "legumes"];

                feira[6] = "frutas";

                No entanto, essa forma caso o índice tenha sido colocado de maneira incorreta, substituirá a informação existente.


        utilizando a método .push para inserir no final do array:
            Ex:
                let feira = ["feijão", "arroz", "cuscuz", "carne", "legumes"];
                
                feira.push("frutas");

                Dessa forma a próxima informação entrará no final da fila do array, no caso acima, na posição 6.

        utilizando o método .unshift() para inserir no início do array:
            Ex:
                let feira = ["feijão", "arroz", "cuscuz", "carne", "legumes"];
                
                feira.unshift("frutas");
        

        - Para saber o tamanho do array, utilizar a função . lenght.        

            Ex:
                let feira = ["feijão", "arroz", "cuscuz", "carne", "legumes"];

                console.log(feira.lenght); // 5


        - Para organizar o array de maneira alfabética ou numérica, utilizar o método .sort

            Ex:
                let feira = ["feijão", "arroz", "cuscuz", "carne", "legumes"];

                console.log(feira.sort());


        - Visualizar o índice exatos:

            Ex:
                console.log(feira[0]);


        - For loop

            Percorrer um array com um for.

                for(let index = 0; index < feira.length; index += 1){
                    const element = array[index];
                    console.log(feira[index]);
                }

        - Para excluir elementos do array, utilizar os métodos 
        
            .pop(): ---> remove o último elemento
                Ex:
                    let feira = ["feijão", "arroz", "cuscuz", "carne", "legumes"];

                    feira.pop() 

                    console.log(feira);

            .shift():
                Ex:
                    let feira = ["feijão", "arroz", "cuscuz", "carne", "legumes"];

                    feira.shift() 

                    console.log(feira);

        - Para buscar itens no array, utilizar o método indexOf():

                Ex:
                    let feira = ["feijão", "arroz", "cuscuz", "carne", "legumes"];

                    let indexOfPurchases = feira.indexOf("cuscuz");

                    console.log(indexOfPurchases); // 2

*/      

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
/*
let feira = ["feijão", "arroz", "cuscuz", "carne", "legumes"];
                
    feira.shift();

    console.log("Itens da feira:", feira);

*/

/*Exercício 1 --- Obtenha o valor "Serviços" do array menu :


let menu = ["Home", "Serviços", "Portifólio", "Links"];
let menuServices = menu.indexOf("Serviços");

console.log(menuServices); */

// Exercício 2 --- Procure o índice do valor "Portfólio" do array menu :
/*
let menu = ["Home", "Serviços", "Portfólio", "Links"];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);*/

//Exercício 3 --- Adicione o valor "Contato" no final do array menu :


let menu = ["Home", "Serviços", "Portfólio", "Links"];

menu.push("E-mail");

console.log(menu);