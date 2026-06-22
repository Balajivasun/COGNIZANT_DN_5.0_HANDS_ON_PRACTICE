public class DatabaseConnection {
    private static DatabaseConnection obj;
    private DatabaseConnection() {
        System.out.println("Database Connection Created");
    }
    public static DatabaseConnection getInstance() {
        if (obj == null) {
            obj = new DatabaseConnection();
        }
        return obj;
    }
    public void connect() {
        System.out.println("Connected to Database");
    }
}
