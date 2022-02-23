SELECT "This is SQL Exercise, Practice and Solution";

SELECT 1, 2, 3;

SELECT 10+15;

SELECT 10+15*4;

USE Scientists;

SELECT * FROM Scientists;

SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

SELECT `Name` FROM Scientists
  ORDER BY Name;

SELECT `Name` AS 'Nome do Projeto' FROM Projects
  ORDER BY `Name` DESC;

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído') FROM Projects;

SELECT Name, Hours FROM Projects
  ORDER BY Hours DESC LIMIT 3;

SELECT * FROM AssignedTo;

SELECT Name, Hours FROM Projects
  ORDER BY Hours DESC LIMIT 1;

SELECT * FROM Projects ORDER BY Hours LIMIT 1 OFFSET 1;

SELECT * FROM Projects ORDER BY Hours LIMIT 5;

SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') FROM Scientists;
