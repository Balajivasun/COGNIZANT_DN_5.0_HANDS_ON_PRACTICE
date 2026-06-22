public class TestDatabase {
    public static void main(String[] args) {

        DatabaseConnection d1 = DatabaseConnection.getInstance();
        DatabaseConnection d2 = DatabaseConnection.getInstance();
        d1.connect();
        if (d1 == d2) {
            System.out.println("Only one object created");
        } else {
            System.out.println("Multiple objects created");
        }
    }
}
