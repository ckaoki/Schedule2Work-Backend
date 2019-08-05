USE schedule2work;
DROP PROCEDURE IF EXISTS fill_date_dimension;
DELIMITER //
CREATE PROCEDURE fill_date_dimension(IN startdate DATE,IN stopdate DATE)
BEGIN
DECLARE currentdate DATE;
SET currentdate = startdate;
WHILE currentdate < stopdate DO
INSERT INTO dates -- (id, full_date, year, month, day quarter, week, day_of_week, weekend, createdAt, updatedAt)
VALUES (
YEAR(currentdate)*10000 + MONTH(currentdate)*100 + DAY(currentdate),
currentdate,
YEAR(currentdate),
MONTH(currentdate),
DAY(currentdate),
QUARTER(currentdate),
WEEKOFYEAR(currentdate),
CASE DAYOFWEEK(currentdate)-1 WHEN 0 THEN 7 ELSE DAYOFWEEK(currentdate)-1 END ,
CASE DAYOFWEEK(currentdate)-1 WHEN 0 THEN 1 WHEN 6 then 1 ELSE 0 END,
now(),
now());

SET currentdate = ADDDATE(currentdate,INTERVAL 1 DAY);
END WHILE;
END
//
DELIMITER ;dates

TRUNCATE TABLE dates;

CALL fill_date_dimension('2019-01-01','2070-01-01');
OPTIMIZE TABLE dates;