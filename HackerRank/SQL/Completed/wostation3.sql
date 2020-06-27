-- SOURCE: https://www.hackerrank.com/challenges/weather-observation-station-3/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
-- DIFFICULTY: EASY

/*
Query a list of CITY names from STATION with even ID numbers only. You may print the results in any order, but must exclude duplicates from your answer.

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
SELECT DISTINCT CITY 
FROM STATION
WHERE ID%2 = 0;

-- COMPLETED, PASSES!