/*
    Arrays:
        - fala sobre índices e posições

    For loop:
        - Explicação sobre como funciona um for
        - .lenght -> tamanho do array  
        
    For of:
        - utiliza apenas dois argumentos, para percorrer um array é suficiente, mas é menos maleável e tem menos recurso. Index não controlado, percorre do início ao fim do array.

        for(lotteryNumber of lotteryNumbers){
            console.log(lotteryNumber);
        }

    Biblioteca Math:
        explica como utilizar a biblioteca Math para o propósito de Loteria. 

            math.random() -> sorteia um número entre 0(inclusive) e 1(exclui)
            math.ceil() -> arredonda um número para cima.
            25.54654613218 -> 25.
            25.12131648797 -> 25.

            ex:
            math.ceil(math.random() * 60)
*/          

//lotteryChecker.js

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

let lotteryNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber]; //iteração

let firstGame = [21, 56, 25, 12, 6, 33];

let numberOfHits = 0;

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1){
    for (let indexGame = 0; indexGame < firstGame.length; indexGame++) {
        if (lotteryNumbers[indexLottery] === firstGame[indexGame]){
            numberOfHits += 1;
        }        
    }    
}

console.log("Números sorteados:", lotteryNumbers);
console.log("Jogo:", firstGame);
console.log("Número de acertos:", numberOfHits);