-- SOURCE: https://www.hackerrank.com/challenges/select-by-id/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
-- DIFFICULTY: EASY

/*
Query all columns for a city in CITY with the ID 1661.

Input Format
The CITY table is described as follows:
    FIELD       |       TYPE
    ID          |       NUMBER
    NAME        |       VARCHAR2(17)
    COUNTRYCODE |       VARCHAR2(3)
    DISTRICT    |       VARCHAR2(20)
    POPULATION  |       NUMBER 
*/

-- QUERY
SELECT * FROM CITY
WHERE ID = 1661

-- COMPLETED, PASSED!