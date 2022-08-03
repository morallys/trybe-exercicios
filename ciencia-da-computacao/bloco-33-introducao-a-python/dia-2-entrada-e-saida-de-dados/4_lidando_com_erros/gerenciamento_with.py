# O with é a palavra reservada para gerenciamento de contexto. Este gerenciamento (with) é utilizado para encapsular a utilização de um recurso, garantindo que certas ações sejam tomadas independentemente se ocorreu ou não um erro naquele contexto.

# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à variável file
with open("4_lidando_com_erros/arquivo.txt", "w") as file:
    file.write("Michelle 27\n")

# o with engloba tudo dentro de sua indentação, e após sair da indentação o arquivo é fechado

# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)
