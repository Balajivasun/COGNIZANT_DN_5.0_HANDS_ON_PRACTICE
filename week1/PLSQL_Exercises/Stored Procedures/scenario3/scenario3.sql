CREATE TABLE BankAccounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(100),
    Balance NUMBER
);

INSERT INTO BankAccounts VALUES (101, 'Balaji', 50000);
INSERT INTO BankAccounts VALUES (102, 'Arun', 30000);

COMMIT;

CREATE OR REPLACE PROCEDURE TransferFunds(
    sourceAcc IN NUMBER,
    targetAcc IN NUMBER,
    amount IN NUMBER
)
AS
    sourceBalance NUMBER;
BEGIN
    SELECT Balance INTO sourceBalance
    FROM BankAccounts
    WHERE AccountID = sourceAcc;

    IF sourceBalance >= amount THEN
        UPDATE BankAccounts
        SET Balance = Balance - amount
        WHERE AccountID = sourceAcc;

        UPDATE BankAccounts
        SET Balance = Balance + amount
        WHERE AccountID = targetAcc;

        COMMIT;
    END IF;
END;
/

BEGIN
    TransferFunds(101, 102, 10000);
END;
/

SELECT * FROM BankAccounts;