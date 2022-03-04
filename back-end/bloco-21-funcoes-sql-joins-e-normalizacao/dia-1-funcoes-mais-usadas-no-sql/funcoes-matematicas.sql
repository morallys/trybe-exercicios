----------------------- Funções matemáticas do MySQL -----------------------

-- SELECT 5 + 5;
-- SELECT 5 - 5;
-- SELECT 5 * 5;
-- SELECT 5 / 5;

-- SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
-- SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
-- SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
-- SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- SELECT 10 DIV 3; -- 3
-- SELECT 10 DIV 2; -- 5
-- SELECT 14 DIV 3; -- 4
-- SELECT 13 DIV 2; -- 6

-- SELECT 10 MOD 3; -- 1
-- SELECT 10 MOD 2; -- 0
-- SELECT 14 MOD 3; -- 2
-- SELECT 13 MOD 2; -- 1
-- SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

SELECT IF(10 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

SELECT 220 DIV 12 AS 'Grupos de 12';
SELECT 220 MOD 12 AS 'Lugares sobrando';

SELECT IF(220 MOD 12 = 0, 'Não', CONCAT('Sim, ', 220 MOD 12)) AS 'Lugares sobrando?';

----------------------- Arredondando Valores -----------------------

-- Podemos omitir ou especificar quantas casas decimais queremos

-- SELECT ROUND(10.4925); -- 10
-- SELECT ROUND(10.5136); -- 11
-- SELECT ROUND(-10.5136); -- -11
-- SELECT ROUND(10.4925, 2); -- 10.49
-- SELECT ROUND(10.4925, 3); -- 10.493

-- O arredondamento sempre para cima pode ser feito com o CEIL

-- SELECT CEIL(10.51); -- 11
-- SELECT CEIL(10.49); -- 11
-- SELECT CEIL(10.2); -- 11

-- O arredondamento sempre para baixo pode ser feito com o FLOOR

-- SELECT FLOOR(10.51); -- 10
-- SELECT FLOOR(10.49); -- 10
-- SELECT FLOOR(10.2); -- 10

----------------------- Exponenciação e Raiz Quadrada -----------------------

-- Elevando um número X à potência Y usando a função POW

-- SELECT POW(2, 2); -- 4
-- SELECT POW(2, 4); -- 16

-- Encontrando a raiz quadrada de um valor usando SQRT

-- SELECT SQRT(9); -- 3
-- SELECT SQRT(16); -- 4

----------------------- Gerando valores aleatórios -----------------------

-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(1 + (RAND() * 59));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))

------------ PARA FIXAR ------------

-- Número aleatório de 15 a 20

SELECT ROUND(15 + (RAND() * 5));

-- Número arredondado 15.7515971 com 5 casas decimais

SELECT ROUND(15.7515971, 5);

-- Valor aproximado da média de 39.494 para baixo

SELECT FLOOR(39.494);

-- Valor aproximado da média de 85.234 para cima

SELECT CEIL(85.234);