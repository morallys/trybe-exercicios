# Podemos observar que a classe está enorme, afinal, ela possui muitas responsabilidades já que cada banco possui uma estratégia. Que tal começar criando um Objeto/Classe para cada banco? Como possuem similaridades, é possível respeitar uma interface única — por exemplo, todos possuírem um método debitar().

from abc import ABC, abstractmethod


class BancoStrategy(ABC):  # Interface
    @classmethod
    @abstractmethod
    def debitar(cls):
        raise NotImplementedError
