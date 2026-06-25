public class TestFactory {

    public static void main(String[] args) {

        Payment p1 = PaymentFactory.getPayment("upi");
        p1.pay();

        Payment p2 = PaymentFactory.getPayment("card");
        p2.pay();
    }
}