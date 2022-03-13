CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;

CREATE TABLE artista (
	artista_id INT PRIMARY KEY auto_increment,
    nome VARCHAR(45)
) ENGINE=InnoDB;

CREATE TABLE estilomusical (
	estilo_id INT PRIMARY KEY auto_increment,
    nome VARCHAR(45) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE album (
	album_id INT PRIMARY KEY auto_increment,
    artist_id INT NOT NULL,
    titulo VARCHAR (100) NOT NULL,
    preco DECIMAL(5,2) NOT NULL,
    estilo_id INT NOT NULL,
    
    FOREIGN KEY (artist_id) REFERENCES artista(artista_id),
    FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) ENGINE=InnoDB; 
