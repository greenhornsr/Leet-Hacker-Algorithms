-- SOURCE: https://www.hackerrank.com/challenges/weather-observation-station-1/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
-- DIFFICULTY: EASY

/*
Query a list of CITY and STATE from the STATION table.

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
SELECT CITY, STATE
FROM STATION

-- COMPLETED, PASSED!