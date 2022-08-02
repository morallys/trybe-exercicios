# Em Python, um loop for geralmente é escrito como um loop sobre um
# objeto iterável. Isso significa que você não precisa de uma variável
# de contagem para acessar itens no iterável.

# Porém, às vezes, pode acontecer de você querer uma variável que muda
# em cada iteração do loop. Em vez de criar e incrementar uma variável
# você mesmo, você pode usar enumerate() do Python para obter um contador
#  e o valor do iterável ao mesmo tempo!

languages = ["Python", "Java", "JavaScript"]

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]
