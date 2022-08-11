from banco_strategy import BancoStrategy


class ItauStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos especifico do Itau (exemplo)
        print("Débito realizado pelo Itau")
