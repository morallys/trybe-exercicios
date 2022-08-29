# Complexidade Logarítmica

# Agora, vamos entender o que é a Complexidade Logarítmica. Mas, antes disso, é preciso deixar nítido que, apesar do termo potencialmente assustador, a Complexidade Logarítmica não exige cálculos matemáticos complicados para ser entendida. 🙂

# Representado pela notação O(log n), um algoritmo logarítmico tem uma alteração na taxa de execução que, geralmente, reduz pela metade o tempo de finalização das iterações ao reduzir pela metade o tamanho do input a cada iteração.

# Vamos refletir sobre isso:

##### Suponha que temos um algoritmo cuja entrada n é igual a 4, se tivermos um algoritmo O(log n) a ser executado com essa entrada, teremos que fazer apenas 2 operações para executá-lo, pois log₂n (lê-se: "log de n na base 2") é igual a 2. Se a nossa entrada fosse o dobro, ou seja, 8 teríamos que realizar apenas 3 operações para chegar ao fim da execução. Ao dobrar o valor da entrada novamente, com n igual a 16, teríamos que realizar apenas 4 operações (log₂n é igual a 4) e assim sucessivamente. #####


# Anota aí 🖊: O número de operações para executar o algoritmo logarítmico tem uma relação inversa ao tamanho da entrada: quanto maior ela é, menor o número de operações e, consequentemente, menor o tempo para a execução do algoritmo!
