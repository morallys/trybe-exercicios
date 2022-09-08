# Algoritmos que usam soluções iterativas

# Soluções iterativas consistem na realização de uma ou mais operações repetidas vezes, por meios de comandos de repetição. As ordenações demonstradas acima (seleção, inserção), são consideradas iterativas, pois estamos realizando operações de comparação e troca de elementos repetidas vezes por meios de comandos de repetição (for).

# 👀De olho na dica: toda solução iterativa pode ser reescrita de forma recursiva.

# Bubble Sort


def bubble_sort(numbers):
    n = len(numbers)

    for ordered_elements in range(n - 1):  # Precisamos ordenar n-1 elementos
        for item in range(0, n - 1 - ordered_elements):
            # Vamos percorrer até o elemento anterior ao ordenado
            if numbers[item] > numbers[item + 1]:
                current_element = numbers[item]

                numbers[item], numbers[item + 1] = numbers[item + 1], current_element

    return numbers


if __name__ == "__main__":
    numbers = [7, 5, 9, 2, 6, 8]
    print(f"Lista inicial: {numbers}")

    ordered_numbers = bubble_sort(numbers)
    print(f"Lista final: {ordered_numbers}")


# Assim como nos algoritmos de força bruta, no pior caso do Bubble Sort ele executará O(n²) operações, então, ele também é um algoritmo de ordem quadrática. Além disso, é possível observar nas imagens a quantidade de passos para ordenarmos 1 elemento.
