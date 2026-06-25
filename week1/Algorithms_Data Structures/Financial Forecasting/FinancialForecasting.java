public class FinancialForecasting {

    public static double forecast(double revenue, double growthRate, int years) {
        if (years == 0) {
            return revenue;
        }

        double nextRevenue = revenue * (1 + growthRate);
        return forecast(nextRevenue, growthRate, years - 1);
    }

    public static void main(String[] args) {
        double currentRevenue = 500000;
        double growthRate = 0.12;
        int years = 5;

        System.out.println("Current Revenue: Rs." + currentRevenue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);

        double predictedRevenue = forecast(currentRevenue, growthRate, years);

        System.out.println("Predicted Revenue after " + years + " years:");
        System.out.println("Rs." + predictedRevenue);

        double increase = predictedRevenue - currentRevenue;
        System.out.println("Total Increase: Rs." + increase);
    }
}