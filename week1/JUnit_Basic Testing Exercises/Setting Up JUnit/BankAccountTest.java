import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class BankAccountTest {

    @Test
    public void testAccountCreation() {
        BankAccount account = new BankAccount("Balaji", 5000);

        assertEquals("Balaji", account.getName());
        assertEquals(5000, account.getBalance());
    }
}