# Busca Linear

# Uma forma simples de fazer a busca de algum valor em um array ou lista é usando a busca linear, que consiste em percorrer toda a estrutura elemento a elemento, tentando encontrar o valor. Também é conhecida como busca sequencial, por conta da maneira com que percorremos a estrutura em busca do valor.

# A busca linear pode ser simples, mas não necessariamente será a solução mais rápida, já que ela faz uma verificação de todos os elementos para encontrar qual é o correspondente.


def linear_search(numbers, target):
    n = len(numbers)  # N será a quantidade de elementos da lista

    for index in range(0, n):  # vamos iterar a lista completa
        if numbers[index] == target:  # se encontrar o elemento alvo, retorne a posição
            return index

    return -1  # Não encontrou? Retorne -1


print(linear_search([1, 2, 3], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1
