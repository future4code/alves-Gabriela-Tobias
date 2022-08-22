## Intro sql

### Exercicio 1
a)Varchar - caracteres strings com n numeros
date - para datas
primary key - é a chave de identificação que é unica
not null - fixar como obrigatório e não opcional

b)nomes de cada item database e tabela

c) traz tds infos

### Exercicio 2
a)
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
    "002",
    "Gloria Pires",
    1200000,
    23-08-1963,
    "female"
);

b)
Duplicate entry '001' for key 'PRIMARY'

Diz que não pode pois é uma key primaria duplicada(key primaria é unica)

c)Coluna não combina com a linha, não foram passadas dentro do parenteses as infos completas para o tanto de info que contém 
d) Campo nome não tem um valor padrão
e)Formato data precisa ser uma string

### Exercicio 3
a)SELECT * from Actor WHERE gender = "female";
b)SELECT salary from Actor WHERE name = "Tony Ramos";
c)SELECT * from Actor WHERE gender = "invalid"; Pesquisa invalida não retornando nenhum valor
d)SELECT id, name, salary from Actor WHERE salary <= 500000;
e)SELECT id, name from Actor WHERE id = "002"

### Exercicio 4
a)seleciona tudo q começa com A e J e que tenha um salario acima de 300000
b)SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
c)SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
d)SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

### Exercicio 5
a)
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsy TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
    );

b)
    INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);

c)
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);

d)
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
);

e)
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "004",
  "Teste",
  "teste texto",
  "2021-05-24",
  5
);

### Exercicio 6

SELECT id, title, rating FROM Movie WHERE id = "003";

SELECT * FROM Movie WHERE name = "Dona Flor e Seus Dois Maridos";

SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

### Exercicio 7

a)
SELECT * FROM Movie
WHERE name like "%vida%";
```

b)
SELECT * FROM Movie
WHERE name like "%vida%" OR synopsy like "%vida%";
```

c)
SELECT * FROM Movie
WHERE release_date <= CURRENT_DATE();

d)
SELECT * FROM Movie
WHERE (
  release_date <= CURRENT_DATE() AND
  (name like "%vida%" OR synopsy like "%vida%") AND
  rating > 7
);
