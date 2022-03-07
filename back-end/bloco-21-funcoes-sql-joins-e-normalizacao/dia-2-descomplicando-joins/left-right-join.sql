
-- REVIEW - Mostra do erro na falta de dados
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- REVIEW - Solução 1 apontada no texto

SELECT
    c.customer_id,
    c.first_name AS first_name_customer,
    c.last_name AS last_name_customer,
    a.actor_id,
    a.first_name AS first_name_actor,
    a.last_name AS last_name_actor
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- REVIEW - Solução 2 apontada no texto

ALTER TABLE actor
  CHANGE first_name first_name_actor VARCHAR(45);

ALTER TABLE actor
  CHANGE last_name last_name_actor VARCHAR(45);

ALTER TABLE customer
  CHANGE first_name first_name_customer VARCHAR(45);

ALTER TABLE customer
  CHANGE last_name last_name_customer VARCHAR(45);

SELECT
    c.customer_id,
    c.first_name_customer,
    c.last_name_customer,
    a.actor_id,
    a.first_name_actor,
    a.last_name_actor
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name_customer = a.last_name_actor
ORDER BY c.last_name_customer;


SELECT * FROM customer;


SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
RIGHT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
INNER JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;