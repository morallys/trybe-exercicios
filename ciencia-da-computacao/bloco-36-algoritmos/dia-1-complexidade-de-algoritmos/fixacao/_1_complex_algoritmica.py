# Exercício 1: Qual é a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?


def multiply_array(numbers):
    result = 1
    for number in numbers:  # O(n)
        result *= number  # O(1)

    return result


if __name__ == "__main__":
    ...
