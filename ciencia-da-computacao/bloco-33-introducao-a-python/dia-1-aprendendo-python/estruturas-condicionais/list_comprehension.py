restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

min_rating = 3.0
filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]

# NOTE - Lê-se dessa forma:
#   ---> Insira um item na lista filtered_restaurants, para cada
# restaurante dentro da lista 'restaurants' quando a nota for maior
#  que 'min_rating' ou 3.0

print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


# Exemplo 2 - A compreensão de listas também funciona com listas de strings.
# A seguinte cria uma nova lista de strings que contém 'a'.

nomes = ["Duda", "Rafa", "Cris", "Yuri"]

# NOTE - Lê-se dessa forma:
# ---> Insere 's', para cada 's' que está dentro de 'nomes',
# quando a letra 'a' estiver dentro de 's'

nomes2 = [s for s in nomes if "a" in s]
print(nomes2)

# Saída
# ['Duda', 'Rafa']

# Exemplo 3 - O exemplo a seguir usa uma compreensão de listas para criar
# uma lista com o quadrado dos números entre 1 e 10.

quadrados = [x * x for x in range(1, 11)]
print(quadrados)

# Saída
# opção com range(1, 11) ---> [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
# opção com range(11)    ---> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
