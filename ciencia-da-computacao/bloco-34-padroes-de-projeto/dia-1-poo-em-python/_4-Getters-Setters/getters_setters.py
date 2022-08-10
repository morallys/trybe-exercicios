# Getters e Setters

# Você já deve ter esbarrado nestes termos no universo P.O.O. Mostramos no exemplo anterior como criar um método que permite acessar e alterar um atributo privado em Python. Porém, existe uma forma mais oficial de criar os métodos responsáveis por recuperar o valor de uma propriedade do objeto (Getter), e o método para alterar o valor em atributo (Setter) conforme podemos ver no código 'liquidificador.py'


class Liquidificador:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__amperagem_atual_no_motor = 0

    # Getter
    @property
    def cor(self):
        return self.__cor

    # Setter
    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


liquidificador = Liquidificador("Azul", "110", "127", "200")


# print(f"A cor atual é {liquidificador.__cor}")
# AttributeError: 'Liquidificador' object has no attribute '__cor'


print(f"A cor atual é {liquidificador.cor}")
liquidificador.cor = "Vermelho"
print(f"Após pintarmos, a nova cor é {liquidificador.cor}")


## Como podemos ver, o acesso ao atributo privado liquidificador.__cor gera um erro, mas podemos criar um método com o nome do atributo cor e decorar ele com o @property para facilitar o acesso de fora liquidificador.cor.

## É possível assim criar um outro método com o nome cor e decorar com @cor.setter. A partir disso a atribuição liquidificador.cor = "Vermelho" passa a funcionar.

# Porque deixar um método privado acessível para alteração de fora?

## Bom, a lógica de negócio pode pedir em algum momento. Digamos que o cliente não pode alterar a cor, mas a assistência técnica autorizada pode.
