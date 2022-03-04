-- Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING

SELECT first_name FROM actor
  GROUP BY first_name;

SELECT first_name, COUNT(*) FROM actor
  GROUP BY first_name;

SELECT rating, AVG(`length`)
  FROM film
  GROUP BY rating;

SELECT rating, MIN(replacement_cost)
  FROM film
  GROUP BY rating;

SELECT rating, MAX(replacement_cost)
  FROM film
  GROUP BY rating;

SELECT rating, SUM(replacement_cost)
  FROM film
  GROUP BY rating;

---------------- Praticando GROUP BY ----------------
-- 1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT active, COUNT(*) FROM sakila.customer GROUP BY active;

-- 2. Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .

SELECT active, store_id, COUNT(*) FROM sakila.customer
  GROUP BY active, store_id;

-- 3. Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.

SELECT rating AS 'classificação indicativa', AVG(rental_duration) AS 'média de duração de locação'
  FROM sakila.film
  GROUP BY rental_duration, rating
  ORDER BY rental_duration DESC;

-- 4. Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.

SELECT district, COUNT(*) AS qtd
  FROM sakila.address
  GROUP BY district
  ORDER BY qtd DESC;

--------------------- FILTRANDO COM HAVING ---------------------

SELECT first_name, COUNT(*) AS nomes_cadastrados
  FROM actor
  GROUP BY first_name
  HAVING nomes_cadastrados > 2;

--------------------- Para Fixar ---------------------

-- 1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

SELECT rating, AVG(length) AS duracao_media
  FROM sakila.film
  GROUP BY rating
  HAVING duracao_media BETWEEN 115.0 AND 121.50
  ORDER BY duracao_media DESC;


-- 2. Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

SELECT rating, SUM(replacement_cost) AS custo_subst
  FROM sakila.film
  GROUP by rating
  HAVING custo_subst > 3950.50
  ORDER BY custo_subst;