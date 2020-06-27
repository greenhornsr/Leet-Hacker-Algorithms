-- SOURCE: https://www.hackerrank.com/challenges/weather-observation-station-5/problem?isFullScreen=true
-- DIFFICULTY: Easy

/*
Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.

Input Format
The STATION table is described as follows:
    FIELD       |       TYPE
    ------------------------------------
    ID          |       NUMBER
    CITY        |       VARCHAR2(21)
    STATE       |       VARCHAR2(2)
    LAT_N       |       NUMBER
    LONG_W      |       NUMBER  
*/

-- QUERY - MySQL (supports LIMIT)
SELECT CITY, LENGTH(CITY) FROM STATION
ORDER BY LENGTH(CITY), CITY
LIMIT 1;

SELECT CITY, LENGTH(CITY) FROM STATION
ORDER BY LENGTH(CITY) DESC, CITY
LIMIT 1;

-- COMPLETED, PASSED!
-- RESULTS: 
    -- Amo 3 
    -- Marine On Saint Croix 21 