CREATE TABLE EmployeeData (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER
);

INSERT INTO EmployeeData VALUES (1, 'Balaji', 'IT', 50000);
INSERT INTO EmployeeData VALUES (2, 'Arun', 'HR', 45000);
INSERT INTO EmployeeData VALUES (3, 'Kumar', 'IT', 60000);

COMMIT;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept IN VARCHAR2,
    bonusPercent IN NUMBER
)
AS
BEGIN
    UPDATE EmployeeData
    SET Salary = Salary + (Salary * bonusPercent / 100)
    WHERE Department = dept;

    COMMIT;
END;
/

BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/

SELECT * FROM EmployeeData;