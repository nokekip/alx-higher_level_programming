-- creates a table called first_table in the current database in MySQL server.

--     first_table description:
--         id INT
--         name VARCHAR(256)
--     The database name will be passed as an argument of the mysql command
CREATE TABLE IF EXISTS first_table (id INT, name VARCHAR(256));