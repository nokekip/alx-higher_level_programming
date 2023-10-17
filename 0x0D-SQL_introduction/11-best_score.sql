-- Displays the scores and name with scores from 10 and above
-- ordered from highest to lowest 
SELECT score, name
FROM second_table
WHERE score >= 10
ORDER BY score desc;