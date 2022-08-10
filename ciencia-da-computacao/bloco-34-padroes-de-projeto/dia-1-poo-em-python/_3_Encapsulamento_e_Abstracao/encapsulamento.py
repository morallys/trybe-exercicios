# NOTE - Tudo com base no código que está em:
# 2-Método-construtor-inicializador/liquidificador.py

# Encapsulamento e Abstração

## O encapsulamento é um dos pilares da orientação a objetos. Por meio dele, podemos simplificar significativamente a programação, bem como proteger informações sigilosas ou sensíveis.

## Em Python, não temos as já conhecidas palavras reservadas: public, private e protected que são utilizadas em outras linguagens para declarar um atributo como privado, por exemplo. Porém, existe uma convenção para indicar que a acessibilidade é privada: basta nomear um método ou atributo com o prefixo __ (dunder/duplo underline), como vimos nos atributos __ligado, __cor, __peso.

# Vamos voltar ao exemplo do liquidificador: "Como podemos proteger o atributo ligado, de forma que fique simples e seguro alterá-lo?"

# Resposta: com os métodos.

# Podemos criar os método ligar e desligar e daremos poderes para que eles consigam manipular os atributos.


## Revisão de Abstração:

### Perceba que se agora chamarmos o método ligar, não temos a necessidade de conhecer o cálculo interno. Este conceito é chamado de Abstração, sendo positivo durante a programação pois deixa os códigos mais limpos.

# Anota aí ✏️: A abstração de dados oculta os detalhes da implementação e mostra apenas a funcionalidade para o usuário, a fim de reduzir a complexidade do código.

# Observe o código liquificador.py que exemplifica esse conceito:
