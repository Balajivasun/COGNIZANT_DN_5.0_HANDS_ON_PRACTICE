public class MessageService {
    private NotificationService notificationService;

    public MessageService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void processMessage() {
        notificationService.sendMessage("Message Sent");
    }
}