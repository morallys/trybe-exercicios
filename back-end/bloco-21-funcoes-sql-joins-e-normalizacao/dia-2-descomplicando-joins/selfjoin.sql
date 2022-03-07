SELECT
  CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
  CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
  employees AS Employee
INNER JOIN
  employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;


SELECT * FROM employees;

-- 1. Queremos saber o Nome das Pessoas Colaboradoras e de suas Gerências cujas gerências ( manager ) não são dos mesmos departamentos ( department ).

SELECT
  CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
  CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
  Employee.DEPARTMENT_ID
FROM
  employees AS Employee
INNER JOIN
  employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE
  Employee.DEPARTMENT_ID != Manager.DEPARTMENT_ID;

-- 2. Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.

SELECT
  CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome do Gerente",
  COUNT(*)
FROM
  employees AS Employee
INNER JOIN
  employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY
  Manager.EMPLOYEE_ID;