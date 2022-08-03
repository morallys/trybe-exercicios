# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir a soma dos valores válidos.

import sys


def sum_numbers(list_number):
    sum = 0
    list_split = list_number.split(" ")

    for number in list_split:
        if number.isdigit():
            sum += int(number)
        else:
            err = f"Erro ao somar valores, {number} é um valor inválido"
            print(f"Erro aconteceu: {err}", file=sys.stderr)

    return print(f"A soma dos valores válidos: {sum}")


list_numbers = input("Digite uma lista de números separados por espaço: ")


sum_numbers(list_numbers)
