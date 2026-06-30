import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        int balance = 500;
        int withdrawAmount = 1000;

        if (withdrawAmount > balance) {
            logger.error("Insufficient balance");
        } else {
            logger.info("Transaction successful");
        }

        if (balance < 1000) {
            logger.warn("Balance is below minimum threshold");
        }
    }
}