# Convencional com espaço em branco

print("O resultado é", 42)  # saída: O resultado é 42
print("Os resultado são", 6, 23, 42)  # saída: Os resultados são 6 23 42


# Alteração de separador:

print("Maria", "João", "Miguel", "Ana")  # saída: Maria João Miguel Ana
print("Maria", "João", "Miguel", "Ana", sep=", ")  # saída: Maria, João, Miguel, Ana


# Alterando o padrão do caractere do fim de linha

# ---> Quebra de linha

print("Em duas ")
print("linhas.")

# ---> Espaço no final das strings

print("Na mesma", end=" ")
print("linha.")
