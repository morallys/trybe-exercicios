import csv


with open("6_manipulando_csv/graduacao_unb.csv", encoding="utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')

    header, *data = graduacao_reader

print(data)
