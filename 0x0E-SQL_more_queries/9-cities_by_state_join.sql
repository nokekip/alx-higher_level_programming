-- lists all the cities in the database hbtn_0d_usa
-- Each record should display: cities.id - cities.name - states.name
-- results must be sorted in ascending order by cities.id

SELECT cities.id, cities.name, states.name
    FROM cities
    JOIN states
    WHERE cities.state_id = states.id
ORDER BY cities.id ASC;
