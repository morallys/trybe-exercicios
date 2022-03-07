SELECT * FROM country;

SELECT * FROM city;

SELECT cid.city, cid.country_id, pais.country
  FROM city AS cid
  INNER JOIN country AS pais
  ON cid.country_id = pais.country_id;

SELECT f.title, f.language_id, l.name
  FROM film AS f
  INNER JOIN language AS l
    ON f.language_id = l.language_id;


------------------------ Dasafios INNER JOIN ------------------------

SELECT * from film;
SELECT * from film_actor;

-- 1. Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.

-- SELECT * from film;
-- SELECT * from film_actor;

SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS 'Full Name', fa.film_id
  FROM actor AS a
  INNER JOIN film_actor AS fa
  ON a.actor_id = fa.actor_id;

-- 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.

SELECT * from staff;
SELECT * from address;

SELECT CONCAT(stff.first_name, ' ', stff.last_name), addr.address
  FROM staff AS stff
  INNER JOIN address AS addr
  ON stff.address_id = addr.address_id;

-- 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .

SELECT * from customer;
SELECT * from address;

SELECT
  cust.customer_id,
  CONCAT(cust.first_name, ' ', cust.last_name) AS 'FullName',
  cust.email,
  addr.address_id,
  addr.address
FROM customer AS cust
INNER JOIN address AS addr
ON cust.address_id = addr.address_id
ORDER BY cust.first_name DESC
LIMIT 100;


-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .


SELECT * from customer;
SELECT * from address;

SELECT
  CONCAT(cust.first_name, ' ', cust.last_name) AS 'FullName',
  cust.email,
  addr.address_id,
  addr.address,
  addr.district
FROM customer AS cust
INNER JOIN address AS addr
ON cust.address_id = addr.address_id
WHERE addr.district = 'California' AND cust.first_name LIKE '%rene%';

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .

SELECT * from customer;
SELECT * from address;

SELECT
  cust.first_name,
  COUNT(addr.address)
FROM customer AS cust
INNER JOIN address AS addr
ON cust.address_id = addr.address_id
WHERE cust.active = 1
GROUP BY cust.customer_id
ORDER BY cust.first_name DESC, cust.last_name DESC;


-- 6. Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT * FROM payment;
SELECT * FROM staff;

SELECT
  CONCAT(stff.first_name, ' ', stff.last_name),
  AVG(pay.amount)
FROM staff AS stff
INNER JOIN payment AS pay
  ON stff.staff_id = pay.staff_id
WHERE YEAR(payment_date) = '2006'
GROUP BY stff.staff_id;


-- 7. Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query.

SELECT * FROM film_actor;
SELECT * FROM actor;
SELECT * FROM film;

SELECT
  act.actor_id,
  CONCAT(act.first_name, ' ', act.last_name) AS 'FullName',
  f.film_id,
  f.title
FROM actor AS act
INNER JOIN film_actor AS fa
  ON fa.actor_id = act.actor_id
INNER JOIN film AS f
  ON f.film_id = fa.film_id;