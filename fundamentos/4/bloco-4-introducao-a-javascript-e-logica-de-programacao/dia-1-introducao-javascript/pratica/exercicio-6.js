/*6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

const nomePeca = "Rei";

if (nomePeca.toLowerCase() === "peao"){
    console.log("O Peão: No primeiro movimento, ele pode andar tanto 1 como 2 casas para frente, dependendo da sua estratégia de abertura. Depois disso, entretanto, o peão só pode se mover 1 casa para frente a cada rodada e nunca pode se mover para trás.");

}else if (nomePeca.toLowerCase() === "cavalo"){
    console.log("O Cavalor: é único na forma de se mover. Enquanto outras peças se movem em linha reta ou na diagonal, ele se mexe em formato de L.");

}else if (nomePeca.toLowerCase() === "bispo"){
    console.log("O Bispo: Na questão do movimento, os bispos se movem apenas na diagonal, mas também podem ir de um canto a outro do tabuleiro, dentro da sua respectiva cor.");

}else if (nomePeca.toLowerCase() === "torre"){
    console.log("A Torre: O movimento dessa peça é ao longo de linhas retas – se houver espaço suficiente, ela pode ir de um lado a outro do tabuleiro em um único movimento.");

}else if (nomePeca.toLowerCase() === "rainha"){
    console.log("A Rainha: Ao passar dos anos e a evolução dos jogadas, a rainha ganhou uma maior variedade de opções de ataque. Ela combina o poder da diagonal dos bispos e a linha reta da torre.");

}else if (nomePeca.toLowerCase() === "rei"){
    console.log("O Rei: Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.");

}else{
    console.error("Não é uma peça válida.");
}