CREATE TABLE IF NOT EXISTS clients (id serial,name TEXT,lastName TEXT,created timestamp DEFAULT NOW());

CREATE TABLE IF NOT EXISTS products (id serial,name TEXT,value NUMERIC,created timestamp DEFAULT NOW());

CREATE TABLE IF NOT EXISTS requests (id serial,client_id INT,product_id INT,created timestamp DEFAULT NOW());


