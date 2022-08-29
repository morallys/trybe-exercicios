# Informalmente, um algoritmo é qualquer procedimento computacional bem definido que toma algum valor ou conjunto de valores como entrada e produz algum valor ou conjunto de valores como saída. Portanto, um algoritmo é uma sequência de etapas computacionais que transformam a entrada na saída" (CLRS - Introduction to Algorithms)


# Anota aí 🖊: A função sum_array recebe um array de números, percorre-o e executa a soma de cada um de seus valores (number), retornando a soma de todos os números pertencentes ao array.


# Complexidade de tempo Linear: O(n)
def sum_array(numbers):
    sum = 0
    for number in numbers:
        sum += number

    return sum


if __name__ == "__main__":
    ...

# sum_array, mesmo que a entrada de dados fosse crescendo, sua saída nunca ocuparia mais espaço, pois o retorno era sempre um número só. Sendo assim, sua Complexidade de Espaço será constante e pode ser representada pela notação O(1).

# Anota aí 🖊: A Ordem de Complexidade nada mais é do que a representação dessa proporção (ou taxa) de crescimento. Dado que o algoritmo é linearmente proporcional ao tempo de execução, dizemos que este é um algoritmo linear.

# A Ordem de Complexidade pode ser chamada, também, de Complexidade Assintótica.
