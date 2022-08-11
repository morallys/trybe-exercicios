from banco_strategy import BancoStrategy


class SantanderStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos especifico do Santander (exemplo)
        print("Santander, Débito efetuado!")
