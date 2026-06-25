public class PaymentFactory {

    public static Payment getPayment(String type) {

        if (type.equals("upi")) {
            return new UPIPayment();
        }
        else if (type.equals("card")) {
            return new CardPayment();
        }

        return null;
    }
}
