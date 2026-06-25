CREATE TABLE SavingsAccounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(100),
    AccountType VARCHAR2(20),
    Balance NUMBER
);

INSERT INTO SavingsAccounts VALUES (101, 'Balaji', 'Savings', 20000);
INSERT INTO SavingsAccounts VALUES (102, 'Arun', 'Savings', 15000);
INSERT INTO SavingsAccounts VALUES (103, 'kumar', 'Current', 30000);

COMMIT;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE SavingsAccounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/

SELECT * FROM SavingsAccounts;