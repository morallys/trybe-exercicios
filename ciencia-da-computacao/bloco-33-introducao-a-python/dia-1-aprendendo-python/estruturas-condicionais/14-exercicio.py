# Exercício 14: Percorra a lista do exercício 13 e imprima
# "Múltiplo de 3" se o elemento for divisível por 3.

ratings = [6, 8, 5, 9, 10]

# Imprime apenas os números divisíveis por 3

# multiple = [score for score in ratings if score % 3 == 0]
# print(multiple)

# Imprime o número e a mensagem de que é múltiplo de 3

for score in ratings:
    if score % 3 == 0:
        print(f"{score} Múltiplo de 3")
