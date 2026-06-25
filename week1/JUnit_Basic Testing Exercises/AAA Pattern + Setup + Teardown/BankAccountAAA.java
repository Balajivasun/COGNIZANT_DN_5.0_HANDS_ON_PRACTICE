import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class BankAccountAAA {

    BankAccount account;

    @BeforeEach
    public void setup() {
        account = new BankAccount("Kumar", 5000);
        System.out.println("Setup completed");
    }

    @AfterEach
    public void teardown() {
        System.out.println("Test completed");
    }

    @Test
    public void testDeposit() {

        account.deposit(2000);

        assertEquals(7000, account.getBalance());
    }
}