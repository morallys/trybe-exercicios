function verificaPalindrome(word) {

    let wordSplit = word.split('');
    let wordReverse = wordSplit.reverse().join('');

    if(word === wordReverse) return console.log(true); //console.log(word + " É um palíndromo");
    else return console.log(false); //console.log(word + " --- Não é um palíndromo --- " + wordReverse);
    
}

verificaPalindrome('arara');
verificaPalindrome('desenvolvimento')