SELECT ANIMAL_ID, NAME,
    CASE
        WHEN INSTR(SEX_UPON_INTAKE, 'Neutered') = 0 AND INSTR(SEX_UPON_INTAKE, 'Spayed') = 0 THEN 'X'
        ELSE 'O'
    END GOZA
FROM ANIMAL_INS
ORDER BY ANIMAL_ID