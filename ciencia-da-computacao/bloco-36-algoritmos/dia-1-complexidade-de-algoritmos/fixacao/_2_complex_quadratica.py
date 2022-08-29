import time


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


if __name__ == "__main__":
    meu_array = [1, 2, 3, 4, 5]

    start_time = time.time()
    multiply_arrays(meu_array, meu_array)
    print(f"{len(meu_array)} de tamanho leva: {(time.time() - start_time)} segundos")

# 25 iterações!
# 5 de tamanho leva: 0.0005609989166259766 segundos
