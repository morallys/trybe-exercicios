# A estrutura deve estar ordenada para que a busca binária funcione


# Complexidade logarítmica: O(log n)
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1
    counter = 0

    while start <= end:
        # os índices podem ser no máximo iguais, o início não pode ultrapassar o fim
        mid = (start + end) // 2  # encontro o meio
        counter += 1

        if numbers[mid] == target:
            # se o elemento do meio for o alvo, devolve a posição do meio
            return f"Meio: {mid} ||| passos: {counter} "

        if target < numbers[mid]:  # se o elemento for menor, atualiza o índíce do fim
            end = mid - 1

        else:  # caso contrário, atualiza o índíce do inicio
            start = mid + 1

    return f"Não encontrou {-1} ||| passos: {counter} "  # Não encontrou? Retorna -1


if __name__ == "__main__":
    numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    target = 7

    print(binary_search(numbers, target))


# Anota aí 🖊: Quando cortamos a entrada pela metade, a cada iteração, temos um padrão que segue a função matemática de logaritmo na base dois! Assim, nosso algoritmo é O(log n).
