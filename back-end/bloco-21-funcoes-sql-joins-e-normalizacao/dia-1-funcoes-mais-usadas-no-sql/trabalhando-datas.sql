----------------------- Trabalhando com DATAS no MySQL -----------------------

SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF("1989-06-21 23:30:10", "2022-03-04 00:39:10");

SELECT DATEDIFF('2022-03-04', '1989-06-21');

SELECT DATEDIFF('2030-01-20', '2022-03-04');

SELECT TIMEDIFF('10:25:45', '11:00:00');