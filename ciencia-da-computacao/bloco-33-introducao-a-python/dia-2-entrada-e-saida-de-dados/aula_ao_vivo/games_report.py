import json

# 1 - o With gera um contexto e não é necessário fechar o arquivo

try:
    with open("./aula_ao_vivo/json_file/video_games.json", "r") as file:
        video_games = json.load(file)

except json.decoder.JSONDecodeError:
    print("Arquivo inválido!")

except FileNotFoundError:
    print("Arquivo inexistente")


# 2 - É necessário abrir e fechar o arquivo

# file = open("./aula_ao_vivo/json_file/video_games.json", "r")
# video_games = json.load(file)

# file.close()
