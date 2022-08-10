# Composição

## Agora que temos nosso liquidificador funcionando, vamos associá-lo a uma pessoa cozinheira, dizendo assim que esta pessoa pode possuir um liquidificador.

## ⚠️Aviso: Lembre que uma pessoa não é da mesma classe que um liquidificador, ela somente é possuidora desse objeto. Neste caso, precisamos utilizar do conceito de Composição.


# Anota aí ✏️: Composição é atribuir o objeto de uma classe a outra, gerando assim um relacionamento de pertencimento entre eles.

# Observe o exemplo abaixo que aplica esse conceito:

# Inserindo o código da classe abaixo em liquidificador.py, existe a possibilidade da Pessoa fazer a compra de um liquidificador caso possua crédito.

# from _2_metodo_construtor_inicializador.liquidificador import Liquidificador


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador


pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_preto)
