# Complexidade quadrática


# Os arrays têm sempre o mesmo tamanho
# def multiply_arrays(array1, array2):
#     result = []
#     for number1 in array1:
#         for number2 in array2:
#             result.append(number1 + number2)

#     return result


# complexidade desse algoritmo é dada por O(n²)
def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


# Anota aí 🖊: conforme aumentamos o tamanho dos arrays de entrada, o número de operações para a execução do algoritmo cresce ao quadrado. Isso significa que, para entradas de tamanho n, a quantidade de operações para executar o algoritmo é de n². Sendo assim, a complexidade desse algoritmo é dada por O(n²) e a chamamos de Complexidade Quadrática.


if __name__ == "__main__":
    meu_array = [1, 2, 3, 4, 5]

    multiply_arrays(meu_array, meu_array)
