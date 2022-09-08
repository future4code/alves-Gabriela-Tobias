SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor 
ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor 
ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor 
CHANGE gender gender VARCHAR(100);

2) a)
UPDATE Actor
SET name = "Lilia Cabral", birth_date = "1957-07-13"
WHERE id = "003";

b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

c)
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

3)a)
DELETE FROM Actor 
WHERE name = "Barbára Paz";

b)
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    
4)a)
SELECT MAX(salary)
FROM Actor;

b)
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";

c)
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";

d)
SELECT SUM(salary)
FROM Actor;

5)a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

b)
SELECT id, name FROM Actor
ORDER BY name DESC;

c)
SELECT * FROM Actor
ORDER BY salary;

d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

6)a)
ALTER TABLE Movies
ADD playing_limit_date DATE;

b)
ALTER TABLE Movies
CHANGE rating rating FLOAT;

c)
UPDATE Movies
SET
	playing_limit_date = "2022/07/10"
WHERE id = "004";

UPDATE Movies
SET
	playing_limit_date = "2006/02/06"
WHERE id = "001";

d)
INSERT INTO Movies 
VALUES ("005", "Laranja Mecânica", "Filme bão", "1975/05/20", 9.5, "1975/06/20");

DELETE FROM Movies
WHERE id = "005";

UPDATE Movies
SET
	synopsis = "Filme bão demais"
WHERE id = "005";

7)a)
SELECT COUNT(*), name FROM Movies 
WHERE rating > 7.5 and playing_limit_date > CURDATE()
GROUP BY name;

b)
SELECT AVG(rating) FROM Movies;

c)
SELECT COUNT(*) AS "Filmes em cartaz" 
FROM Movies
WHERE playing_limit_date > CURDATE();

d)
SELECT COUNT(*) AS "Filmes que irão lançar"
FROM Movies
WHERE release_date > CURDATE();

e)
SELECT MAX(rating) FROM Movies;

f)
SELECT MIN(rating) FROM Movies;

8)a)
SELECT * FROM Movies
ORDER BY name ASC;

b)
SELECT * FROM Movies
ORDER BY name DESC 
LIMIT 5;

c)
SELECT name, rating FROM Movies
ORDER BY rating DESC 
LIMIT 3; 