# Anteriormente, dissemos que a complexidade de um algoritmo representa o crescimento de seu tempo de execução em função de uma taxa, a quantidade de operações que ele realiza. Porém, quando falamos em complexidade, não analisamos apenas o tempo, analisamos também o espaço gasto. Vejamos como isso funciona.

# Observe o algoritmo a seguir:

# Complexidade de tempo Linear: O(n)
def squared_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number * number)

    return array_of_squares


# O(n) representa o loop que é realizado na entrada, ou seja, caso seja recebido um array com 10 posições, o será necessário percorrê-lo completamente (10 posições) para realizar a instrução. Sendo assim, serão necessárias N iterações para executá-lo.

# Também será necessário executar N iterações para salvar o resultado em uma nova lista, ou seja, O(n) também.


if __name__ == "__main__":
    ...


# Esse algoritmo recebe um array de números, percorre esse array e retorna um novo com os números ao quadrado. Ou seja, ele passa por todos os elementos desse array. Isso significa que se houver 10 números na entrada de dados,por exemplo, serão realizadas 10 operações; se houver 100 serão realizadas 100 operações.

# Em relação à Complexidade de Tempo, temos aqui uma taxa de crescimento linear, uma vez que o aumento no tamanho do array faz crescer proporcionalmente o tempo gasto na execução do algoritmo. Sendo assim, podemos afirmar que a Complexidade de Tempo aqui é O(n), chamada geralmente tempo linear (Lembre-se que O faz referência aqui a ordem de complexidade, enquanto (n) representa a fórmula matemática que diz sobre a taxa de crescimento do número de operações).
