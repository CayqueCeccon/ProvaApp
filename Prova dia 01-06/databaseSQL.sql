CREATE DATABASE prova;
USE prova;
CREATE TABLE usera(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(60) NOT NULL,
sobrenome VARCHAR(60) NOT NULL,
setor VARCHAR(60) NOT NULL,
funcao VARCHAR(60) NOT NULL
);
INSERT INTO usera (id, nome, sobrenome, setor, funcao) VALUES
(1, "Cayque", "Cecco", "Sonoplastia", "Mixagem e equalização"),
(default, "Felipe", "Ludwig", "Montagem", "Preparar e montar equipamentos");

SELECT * FROM usera;

DROP TABLE usera;