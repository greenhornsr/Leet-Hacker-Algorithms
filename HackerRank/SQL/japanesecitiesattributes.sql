-- SOURCE: https://www.hackerrank.com/challenges/japanese-cities-attributes/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
-- DIFFICULTY: EASY

/*
Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.

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
SELECT * 
FROM CITY
WHERE COUNTRYCODE = 'JPN'

-- COMPLETED, PASSED!