# # Insertion Sort

# A ordenação por inserção (insertion sort) tem esse nome por inserir um elemento de cada vez em sua posição correta. Fazendo uma analogia a um jogo de cartas, onde sua "mão" esteja ordenada, é como se a cada nova carta recebida fossemos movendo ela até achar a posição correta e a inserimos ali, e faremos isso sucessivamente até que não tenha novas cartas e por consequência, nossa mão esteja ordenada. A ordenação por inserção é mais eficiente que a ordenação por seleção e também considerada mais simples.

from xxlimited import new


def insertion_sort(numbers):
    n = len(numbers)  # Quantidade de elementos na lista

    for index in range(1, n):  # Começaremos a ordenar pelo segundo elemento
        key = numbers[index]  # Pegamos o segundo elemento e o definimos como chave

        new_position = index - 1  # Tomamos a posição anterior para iniciar a comparação

        while new_position >= 0 and numbers[new_position] > key:
            # Enquanto a chave for menor, remaneja o elemento para frente
            numbers[new_position + 1] = numbers[new_position]  # Remaneja o elemento
            new_position = new_position - 1

        numbers[new_position + 1] = key  # Insere a chave na posição correta
        print(numbers)

    return numbers


if __name__ == "__main__":
    numbers = [7, 5, 9, 2, 6, 8]
    print(f"Lista inicial: {numbers}")

    ordered_numbers = insertion_sort(numbers)
    print(f"Lista final: {ordered_numbers}")
