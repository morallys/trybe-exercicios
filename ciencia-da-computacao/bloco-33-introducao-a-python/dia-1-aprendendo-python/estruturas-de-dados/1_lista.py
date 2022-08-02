# Lista - é uma sequência mutável e ordenada de elementos
# - armazenameto de entidades relacionadas (lista de supermercado)
# exemplo    ---> usersAdm = ['Juan', 'Kaline']

# add user                  // usersAdm.append('Nice')
# extender de outra lista   // acessAdm.extend(usersAdm)


fruits = ["laranja", "maçã", "uva", "abacaxi"]

fruits[0]  # o acesso é feito por índices iniciados em 0
fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta
fruits.remove("abacaxi")  # removendo uma fruta
fruits.extend(
    ["pera", "melão", "kiwi"]
)  # acrescenta uma lista de frutas a lista original
fruits.index("maçã")
# retorna o índice onde a fruta está localizada, neste caso, 1

fruits.sort()  # ordena a lista de frutas


# ## Vamos continuar com os exercícios! 💪
# ## Copie a lista abaixo para realizarmos os exercícios de fixação 5 e 6:


trybe_course = ["Introdução", "Front-end", "Back-end"]

# ## 5: Adicione o elemento "Ciência da Computação" à lista.

trybe_course.append("Ciência da computação")

# ## 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".

trybe_course[0] = "Fundamentos"
