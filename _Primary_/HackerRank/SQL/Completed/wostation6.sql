-- SOURCE: https://www.hackerrank.com/challenges/weather-observation-station-6/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
-- DIFFICULTY: EASY

/*
Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

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
-- MY FIRST PASS SOLUTION
SELECT CITY FROM STATION
WHERE LOCATE("a", CITY) = 1
OR LOCATE("e", CITY) = 1
OR LOCATE("i", CITY) = 1
OR LOCATE("o", CITY) = 1
OR LOCATE("u", CITY) = 1

-- ALTERNATIVE SOLUTION
SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP "^[aeiou].*";

-- COMPLETED, PASSED!