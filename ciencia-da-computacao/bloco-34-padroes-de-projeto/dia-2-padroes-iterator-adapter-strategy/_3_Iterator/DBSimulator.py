# Iterator

# Imagine a situação: você está em um time de desenvolvimento e suas habilidades envolvidas na criação de códigos limpos e reutilizáveis serão bem-vindas. O primeiro desafio está relacionada à cobrança de clientes, e em uma reunião a dor da equipe é compartilhada:

# _____________
# Costumávamos fazer os relatórios de cobrança a clientes de forma manual, mas isso se tornou impossível com o constante crescimento de clientes que começou há 3 meses. Estamos com um atraso de 3 meses de relatório! Agora nossa empresa comprou uma ferramenta automática de relatórios, mas o meu computador não conseguiu carregar 3 meses de tabela para fazer o relatório! Exige muito da memória e o sistema simplesmente trava. 😟
# _____________

# Após de debater soluções com o time, foi decidido que o problema é o tamanho do que está sendo carregado no servidor. Não é possível carregar os 300 GB de dados do banco, então a saída é dividir o resultado da consulta em partes menores, pegando uma de cada vez para alimentar a ferramenta de relatórios.

# Antes de começar, faz-se necessário o banco de dados. Para diminuir a complexidade deste exemplo, segue uma pseudo implementação de uma classe que faz a simulação do banco de dados:


class DbSimulator:
    def __init__(self):
        # Imagine que estes dados estão populados no banco de dados
        self.person_table = [
            {"name": "Morgana", "age": "22"},
            {"name": "Sarah", "age": "24"},
            {"name": "Will", "age": "33"},
            {"name": "Rick", "age": "23"},
            {"name": "John", "age": "22"},
            {"name": "Peter", "age": "35"},
            {"name": "Groove", "age": "48"},
            {"name": "Sam", "age": "19"},
        ]

    # Não se preocupe com este método apenas simula um retorno get do banco.
    def get(self, query, page):
        per_page = 2

        if query == "select * from person":
            first = (page * per_page) - per_page
            last = page * per_page

            return self.person_table[first:last]
