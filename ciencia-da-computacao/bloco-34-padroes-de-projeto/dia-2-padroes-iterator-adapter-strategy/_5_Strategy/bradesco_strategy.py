from banco_strategy import BancoStrategy


class BradescoStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos especifico do Bradesco (exemplo)
        print("Sucesso!")
