# Herança

### - Pensando em eletrônicos, alguns deles possuem características em comum, não é mesmo? Tais como: voltagem, potência, ligado ou desligado e cor. Com isso, podemos perceber que para o construtor da geladeira, televisão e liquidificador, sempre teremos atributos idênticos.

### - Mas você pode estar refletindo: "Repetir tanto código não é eficiente, correto?"

# Sim! E a boa notícia é que podemos evitar essa repetição com o conceito de herança, criando assim uma classe Eletrodomésticos. Neste sentido, as classes geladeira, batedeira, fogão, microondas serão suas filhas, ou seja, a herdarão.

# Anota aí ✏️: Herança é especializar o comportamento de uma classe, ou seja, a classe herdeira é tudo que a classe ascendente é e talvez um pouco mais!


class Eletrodomestico:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__amperagem_atual_no_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.velocidade_maxima
        ) * self.__velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    def __str__(self) -> str:
        return f"""
            Preço: {self.preco}
            Cor: {self.__cor}
            Potência: {self.__potencia}
            Voltagem: {self.__voltagem}
        """

    # Getter
    @property
    def cor(self):
        return self.__cor

    # Setter
    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor
