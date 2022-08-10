# Para implementar o polimorfismo em Python, precisamos criar uma classe que será a Interface, responsável por definir os combinados para suas classes herdeiras.

# Por exemplo, nossa classe Interface será a Grafico, sua única responsabilidade será declarar a assinatura dos métodos de um gráfico. Assim conseguimos forçar que suas herdeiras sigam o mesmo padrão (como respeitar um contrato).


from abc import ABC, abstractmethod


class Grafico(ABC):
    @abstractmethod
    def desenhar(self):
        raise NotImplementedError


class GraficoBarras(Grafico):
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico de barras")


class GraficoRadar(Grafico):
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico radar")


class GraficoPizza(Grafico):
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico de Pizza")


grafico_1 = GraficoRadar([1, 2])
grafico_1.desenhar()
