alunos = "Marcos 10\nFelipe 4\nJosé 6\nAna 10\nMaria 9\nMiguel 5"
alunos_reprovados = ""

with open("exercicio_fixacao/arquivo_alunos.txt", mode="w") as file:
    file.write(alunos)


with open("exercicio_fixacao/arquivo_alunos.txt", mode="r") as file:
    for aluno in file:
        isApproved = aluno.split()

        if int(isApproved[1]) < 6:
            alunos_reprovados += f"{isApproved[0]}\n"


with open("exercicio_fixacao/arquivo_alunos_reprovados.txt", mode="w") as file:
    file.write(alunos_reprovados)


with open("exercicio_fixacao/arquivo_alunos_reprovados.txt", mode="r") as file:
    print(file.read())
