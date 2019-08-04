USE calendar;
DROP TABLE IF EXISTS dates;
CREATE TABLE dates (
id INTEGER PRIMARY KEY, -- year10000+month100+day
full_date DATE NOT NULL,
year INTEGER NOT NULL,
month INTEGER NOT NULL, -- 1 to 12
day INTEGER NOT NULL, -- 1 to 31
quarter INTEGER NOT NULL, -- 1 to 4
week INTEGER NOT NULL, -- 1 to 52/53
day_of_week INTEGER NOT NULL, -- 1 to 7
weekend INTEGER NOT NULL,
UNIQUE td_ymd_idx (year,month,day),
UNIQUE td_dbdate_idx (full_date)

) Engine=innoDB;

DROP PROCEDURE IF EXISTS fill_date_dimension;
DELIMITER //
CREATE PROCEDURE fill_date_dimension(IN startdate DATE,IN stopdate DATE)
BEGIN
DECLARE currentdate DATE;
SET currentdate = startdate;
WHILE currentdate < stopdate DO
INSERT INTO dates VALUES (
YEAR(currentdate)*10000+MONTH(currentdate)*100 + DAY(currentdate),
currentdate,
YEAR(currentdate),
MONTH(currentdate),
DAY(currentdate),
QUARTER(currentdate),
WEEKOFYEAR(currentdate),

CASE DAYOFWEEK(currentdate)-1 WHEN 0 THEN 7 ELSE DAYOFWEEK(currentdate)-1 END ,
CASE DAYOFWEEK(currentdate)-1 WHEN 0 THEN 1 WHEN 6 then 1 ELSE 0 END);
SET currentdate = ADDDATE(currentdate,INTERVAL 1 DAY);
END WHILE;
END
//
DELIMITER ;dates

TRUNCATE TABLE dates;

CALL fill_date_dimension('2019-01-01','2070-01-01');
OPTIMIZE TABLE dates;