# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def bigger(num1, num2):

    if num1 > num2:
        return num1
    else:
        return num2


print(bigger(1, 9))


# Resolução extra com retorno da soma e o maior número


def sumNumbers(num1, num2):
    sum = num1 + num2

    if num1 > num2:
        greater = num1
    else:
        greater = num2

    return f"Soma: {sum}, Maior: {greater}"


print(sumNumbers(1, 9))
