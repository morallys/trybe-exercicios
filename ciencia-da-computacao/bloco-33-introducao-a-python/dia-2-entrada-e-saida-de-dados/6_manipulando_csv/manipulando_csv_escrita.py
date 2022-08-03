import csv


with open("6_manipulando_csv/graduacao_unb.csv", mode="r", encoding="utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')

    header, *data = graduacao_reader

group_by_departament = {}
for row in data:
    departament = row[15]

    if departament not in group_by_departament:
        group_by_departament[departament] = 0

    group_by_departament[departament] += 1

# Escreve o relatório em .csv
# Abre um arquivo para escrita

with open(
    "6_manipulando_csv/departament_report.csv", mode="w", encoding="utf-8"
) as file:

    writer = csv.writer(file)

    # Escreve o cabeçalho
    headers = ["Departamento", "Total de cursos"]

    writer.writerow(headers)

    # Escreve as linhas de dados
    # Desempacotamento de valores
    for departament, grades in group_by_departament.items():
        # Agrupa o dado com o turno

        row = [departament, grades]
        writer.writerow(row)
