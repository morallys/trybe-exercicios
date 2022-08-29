# Imagine que você recebe dois arrays de tamanho igual, array1 e array2. Para cada elemento do array1, realize uma busca binária no array2. Mostre que a ordem de complexidade do algoritmo resultante é O(n * log n), ou O(n log n).


from fixacao.binary_search import binary_search


def se_existe(array1, array2):
    for a1 in array1:  # O(n)
        binary_search(array2, a1)  # O(log n)


# Para cada elemento de array1, é realizada a busca dentro do array2 chamando a função já implementada binary_search que realiza uma busca dentro do array2 se o elemento do array1 está presente.


if __name__ == "__main__":
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    busca = [3, 4, 9, 11, 13, 15, 16, 18, 19, 20]
