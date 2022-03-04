----------------------- MANIPULAÇÃO DE STRINGS -----------------------

SELECT * FROM sakila.film;

SELECT UCASE(title) FROM film
  LIMIT 10;

SELECT LCASE(title) FROM film
  LIMIT 10;

SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM film
  WHERE film_id = 1;

SELECT LEFT(title, 7) FROM film
  WHERE film_id = 1;

SELECT RIGHT(title, 8) FROM film
  WHERE film_id = 1;

SELECT CHAR_LENGTH(title) FROM film
  WHERE film_id = 1;

SELECT SUBSTRING(title, 5, 2) FROM film
  WHERE film_id = 1;

SELECT SUBSTRING(title, 5) FROM film
  WHERE film_id = 1;

SELECT UCASE('trybe');

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

SELECT CHAR_LENGTH('Uma frase qualquer');

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
