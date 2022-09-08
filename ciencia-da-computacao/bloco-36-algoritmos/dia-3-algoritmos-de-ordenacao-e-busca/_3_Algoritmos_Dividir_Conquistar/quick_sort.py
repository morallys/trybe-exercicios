# Quick Sort

# O quicksort é um algoritmo que também utiliza da técnica de divisão e conquista. Sua estratégia de ordenação consiste em determinar um elemento pivô (nome dado ao elemento que divide o array em porções menores). Em seguida, todos os elementos maiores que o pivô serão colocados à direita e os menores à esquerda. Com isto, o pivô será colocado em sua posição correta e teremos duas subcoleções não ordenadas ao seu redor. Recursivamente ordenamos os sub arrays, repetindo o mesmo processo de escolha do pivô e particionamento (divisão).

# Além disso, o quicksort possui dois procedimentos:

# Função quicksort: nela a coleção será particionada de acordo com o pivô;
# Função partition: ela é a chave para o algoritmo. Nela, a coleção será reorganizada.


def quick_sort(numbers, start, end):
    if start < end:
        p = partition(numbers, start, end)
        quick_sort(numbers, start, p - 1)
        # Os menores em relação ao pivô ficarão à esquerda
        quick_sort(numbers, p + 1, end)
        # Os maiores elementos em relação ao pivô ficarão à direita


# função auxiliar responsável pela partição do array
# escolhendo um pivô e fazendo movimentações dos sub arrays gerados


def partition(numbers, start, end):
    pivot = numbers[end]
    delimiter = start - 1

    for index in range(start, end):
        # o indice será o elemento em análise no momento, ele passará por todos os elementos
        if numbers[index] <= pivot:
            delimiter = delimiter + 1
            numbers[index], numbers[delimiter] = numbers[delimiter], numbers[index]

    numbers[delimiter + 1], numbers[end] = numbers[end], numbers[delimiter + 1]

    return delimiter + 1


if __name__ == "__main__":
    numbers = [6, 5, 3, 1, 8, 7, 2, 4]
    quick_sort(numbers, 0, len(numbers) - 1)
    print(numbers)
