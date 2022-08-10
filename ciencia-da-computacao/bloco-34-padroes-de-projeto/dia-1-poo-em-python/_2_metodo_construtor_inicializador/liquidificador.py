# Método Construtor/Inicializador

## Após modelada nossa Classe do objeto, podemos partir para o Construtor. Na maioria das linguagens, o construtor cria a instância do objeto e já inicializa os seus atributos.

# Em python, esta operação é dividida em dois métodos:

##### new (Construtor)
##### init (Inicializador).

# Anota aí ✏️: O Python já implementa estes métodos por padrão para cada nova classe criada. Mas, você pode implementá-los novamente, ou seja, reescrevê-los. É desse modo que customizamos nosso construtor/inicializador.

# 2. Basta recriar o método init dentro de nossa classe, conforme exemplo a seguir:


from _6_Heranca.eletrodomestico import Eletrodomestico


class Liquidificador(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        # chamando o método super da classe mãe
        super().__init__(cor, potencia, voltagem, preco)

    # # Getter
    # @property
    # def cor(self):
    #     return self.__cor

    # # Setter
    # @cor.setter
    # def cor(self, nova_cor):
    #     self.__cor = nova_cor

    # def ligar(self, velocidade):
    #     self.__velocidade = velocidade
    #     self.__amperagem_atual_no_motor = (
    #         (self.__potencia / self.__voltagem) / self.__velocidade_maxima
    #     ) * self.__velocidade

    #     self.__ligado = True

    # def desligar(self):
    #     self.__ligado = False
    #     self.__velocidade = 0

    # def esta_ligado(self):
    #     return self.__ligado

    # def __str__(self) -> str:
    #     return f"""
    #         Preço: {self.preco}
    #         Cor: {self.__cor}
    #         Potência: {self.__potencia}
    #         Voltagem: {self.__voltagem}
    #     """


liquidificador_preto = Liquidificador("Preto", 1100, 220, 150)


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def __str__(self) -> str:
        return f"""
            - Nome: {self.nome}
            - Saldo: {self.saldo_na_conta}
            - Liquidificador: {self.liquidificador}
        """


pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_preto)

print(pessoa_cozinheira)

if __name__ == "__main__":
    liquidificador_preto.ligar(1)

    print("Está ligado?", liquidificador_preto.esta_ligado())

    liquidificador_preto.desligar()

    print("Está ligado", liquidificador_preto.esta_ligado())

    # liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 89)
