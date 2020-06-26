-- SOURCE: https://www.hackerrank.com/challenges/weather-observation-station-4/problem?isFullScreen=true
-- DIFFICULTY: EASY

/*
Let N be the number of CITY entries in STATION, and let N be the number of distinct CITY names in STATION; query the value of N - N from STATION. In other words, find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.

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

-- QUERY
SELECT COUNT(CITY) - COUNT(DISTINCT CITY)
FROM STATION;

-- COMPLETED, PASSED!