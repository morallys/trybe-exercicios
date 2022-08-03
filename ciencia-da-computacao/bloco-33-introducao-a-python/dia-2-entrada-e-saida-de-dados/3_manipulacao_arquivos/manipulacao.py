file = open("3_manipulacao_arquivos/arquivo_criado.txt", mode="w")
# ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.

file.write("nome idade\n")
file.write("Maria 60\n")
file.write("Juan 33\n")

print("Maruska 41", file=file)

LINES = ["Kadidija 39\n", "Kaline 39\n"]
file.writelines(LINES)

file.close()
