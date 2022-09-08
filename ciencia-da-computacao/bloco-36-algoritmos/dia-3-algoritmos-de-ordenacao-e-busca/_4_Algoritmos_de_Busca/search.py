# Algoritmos desta categoria buscam um item com uma determinada propriedade dentro de uma coleção, podendo esta coleção ser gerada elemento a elemento, a partir de uma série de operações (fórmula matemática, procedimento), não necessitando uma coleção de fato. Esses algoritmos não devem ser associados somente com arrays. São considerados algoritmos desta categoria aqueles que fazem travessias em estruturas de dados com o propósito de encontrar um valor.


# Complexidade

# O algoritmo linear_search, no pior caso (se o elemento estiver na última posição ou não existir), precisará percorrer toda a estrutura para encontrar o elemento. Diante disso, sua complexidade é O(n). No entanto, o algoritmo de linear_search não necessita que a coleção esteja ordenada.

# No caso do algoritmo binary_search, no pior caso ele precisará de O(log n) operações para encontrar o elemento (também ocorre caso o elemento não exista).

# Vamos ver uma comparação entre as buscas? Suponha que cada operação computacional execute em um tempo de 1ms.
