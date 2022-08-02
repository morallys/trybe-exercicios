# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.


def lenNames(listNames):
    biggerName = ""

    for name in listNames:
        if len(name) > len(biggerName):
            biggerName = name

    return print(biggerName)


users = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

lenNames(users)
