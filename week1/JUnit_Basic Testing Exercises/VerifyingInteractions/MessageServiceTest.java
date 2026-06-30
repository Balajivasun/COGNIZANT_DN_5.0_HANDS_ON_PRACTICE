import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MessageServiceTest {

    @Test
    public void testVerifyInteraction() {
        NotificationService mockService = mock(NotificationService.class);

        MessageService service = new MessageService(mockService);
        service.processMessage();

        verify(mockService).sendMessage("Message Sent");
    }
}