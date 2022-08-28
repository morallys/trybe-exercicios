# NOTE - Tentativa ao site que irá retornar só após 10 segundos, mas que essa situação não seria ideal em um ambiente real. Temos que ter um tempo limite para que seja retornada alguma informação.

# FIXME - PROBLEMA

# import requests

# # Por 10 segundos não temos certeza se a requisição irá retornar
# response = requests.get("https://httpbin.org/delay/10")
# print(response)


# TODO - O que fazer para metigar essa situação


import requests


try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)
