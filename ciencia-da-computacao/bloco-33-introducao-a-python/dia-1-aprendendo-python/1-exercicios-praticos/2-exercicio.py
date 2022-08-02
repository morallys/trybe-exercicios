# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def average(numbersList):
    sum = 0
    for num in numbersList:
        sum += num

    return print(sum / len(numbersList))


numbers = [9, 6, 7, 8, 10]

average(numbers)
