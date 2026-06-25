import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        BankAccount account = new BankAccount("Arun", 10000);

        assertEquals("Arun", account.getName());
        assertNotNull(account);
        assertTrue(account.getBalance() > 5000);
        assertFalse(account.getBalance() < 5000);
        assertNotEquals(0, account.getBalance());
    }
}