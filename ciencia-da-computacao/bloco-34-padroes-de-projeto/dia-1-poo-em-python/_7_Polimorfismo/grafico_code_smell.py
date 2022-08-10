# Polimorfismo com interface

# Técnica que reduz significativamente o esforço para ampliar um projeto. A Interface é uma classe abstrata que define comportamentos para classes concretas.

# Vamos considerar uma aplicação que gera três tipos de gráficos:

# Gráfico Radar --- Gráfico pizza --- Gráfico barras

# Para desenvolver esta aplicação, podemos criar uma classe Grafico(), possuindo um método para cada gráfico existente, e um método geral desenhar(), que possui uma condição para escolher o tipo de gráfico. Observe:


class Grafico:
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self, tipo_de_grafico):
        if tipo_de_grafico == "GraficoBarras":
            self.__desenhar_grafico_barras()

        if tipo_de_grafico == "GraficoRadar":
            self.__desenhar_grafico_radar()

        if tipo_de_grafico == "GraficoPizza":
            self.__desenhar_grafico_pizza()

    def __desenhar_grafico_barras(self):
        print("Lógica para gráfico de barras")

    def __desenhar_grafico_radar(self):
        print("Lógica para gráfico radar")

    def __desenhar_grafico_pizza(self):
        print("Lógica para gráfico de pizza")


grafico_1 = Grafico([1, 2])
grafico_1.desenhar("GraficoRadar")


# Este código pode parecer seguir as boas práticas de estrutura. Entretanto, sempre que forem adicionados novos gráficos ele ficará ainda maior e consequentemente custoso para realizar a manutenção.

# ⚠️ Aviso: Essas estruturas são conhecidas como Code Smell, ou seja, código que cheira mal (bad smell).

# Existem diversos Code Smells conhecidos (no livro "Refatoração" de Martin Fowler são apresentados 24), e esse apresentado no exemplo é chamado de Switch Statement (Switches repetidos). Como a vida de uma pessoa programadora consiste em resolver problemas, temos uma solução para esse Code Smell: o Polimorfismo.
