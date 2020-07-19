CREATE DATABASE IF NOT EXISTS loldesign;

USE loldesign;

CREATE TABLE products(
	id INT(11) NOT NULL AUTO_INCREMENT,
    origem VARCHAR(11) NOT NULL,
    destino VARCHAR(11) NOT NULL,
    valor DOUBLE NOT NULL,
    PRIMARY KEY (id)
);

DESCRIBE products;

SELECT * FROM products;

INSERT INTO products values 
	(1, '011', '016', 1.90),
    (2, '016', '011', 2.90),
    (3, '011', '017', 1.70),
    (4, '017', '011', 2.70),
    (5, '011', '018', 0.90),
    (6, '018', '011', 1.90);

