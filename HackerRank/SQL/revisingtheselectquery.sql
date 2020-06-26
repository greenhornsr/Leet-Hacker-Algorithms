--  SOURCE: https://www.hackerrank.com/challenges/revising-the-select-query/problem?isFullScreen=true
--  DIFFICULTY: EASY

/*
Query all columns for all American cities in CITY with populations larger than 100000. The CountryCode for America is USA.

Input Format

The CITY table is described as follows: 
    FIELD       |       TYPE
    ID          |       NUMBER
    NAME        |       VARCHAR2(17)
    COUNTRYCODE |       VARCHAR2(3)
    DISTRICT    |       VARCHAR2(20)
    POPULATION  |       NUMBER       
*/

-- QUERY: 
SELECT * FROM CITY 
WHERE COUNTRYCODE = 'USA'
AND POPULATION > 100000;

