# Polimorfismo


# Polimorfismo de métodos

# É quando um objeto pode conter diferentes declarações de um método, de acordo com os parâmetros de entrada. Algumas linguagens até permitem que você escreva um novo método como o mesmo nome, porém, com mais ou menos parâmetros (C#).

# Contudo, em Python este recurso é liberado apenas indicando que os elementos são opcionais.

# Voltando no exemplo da classe Pessoa, para declarar informarmos a idade, o nome e saldo_na_conta, mas será que é necessário? Podemos deixar alguns opcionais ? Observe o exemplo a seguir:


class Pessoa:
    # None é equivalente ao clássico NULL em outras linguagens
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []

    def __str__(self) -> str:
        return f"""
    {f"Nome: {self.nome}" if self.nome else None}
    {f"Saldo na conta: {self.saldo_na_conta}" if self.saldo_na_conta != None else ''}
    {f"Idade: {self.idade}" if self.idade != None else ''}
    {f"Brinquedos: {self.brinquedos}" if len(self.brinquedos) > 0 else ''}
        """


# pessoa_1 = Pessoa("Marcelo", 22, 700)
# pessoa_2 = Pessoa("Matheus")
# pessoa_3 = Pessoa("Matheus", 33)
# pessoa_4 = Pessoa("Matheus", saldo_na_conta=100)
