# Conjunto - Sempre que seja necessário fazer operações de conjunto   ---> admUser = { "Juan", "Kaline" }

# Operações matemáticas com conjuntos podem ser usadas aqui, muito parecidas inclusive:

  # Exemplos:

  # conjunto.union(outroConjunto) ---> para unir dois conjuntos: Tuplas, listas, etc
  # conjunto.difference(outroConjunto) ---> para verificar a diferença entre dois conjuntos
  # conjunto.intersection(outroConjunto) ---> para verificar o item que pertence aos dois conjuntos

permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto
permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto
permissions.union({"user"})  # retorna um conjunto resultado da união
permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos
permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# Conjuntos imutáveis (frozenset)
# É uma variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa.

permissionsFronzenSet = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissionsFronzenSet.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissionsFronzenSet.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissionsFronzenSet.difference({"user"})  # retorna a diferença entre os dois conjuntos