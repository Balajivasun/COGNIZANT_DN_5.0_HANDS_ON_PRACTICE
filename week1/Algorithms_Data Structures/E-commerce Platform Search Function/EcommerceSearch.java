class Product {
    int productId;
    String productName;
    String brand;
    double price;

    Product(int productId, String productName, String brand, double price) {
        this.productId = productId;
        this.productName = productName;
        this.brand = brand;
        this.price = price;
    }
}

public class EcommerceSearch {
    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Dell Inspiron 15", "Dell", 65000),
            new Product(102, "HP Pavilion Gaming", "HP", 72000),
            new Product(103, "Lenovo ThinkPad E14", "Lenovo", 68000),
            new Product(104, "MacBook Air M2", "Apple", 95000)
        };

        String targetProduct = "MacBook Air M2";
        boolean found = false;

        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(targetProduct)) {
                System.out.println("Product Found");
                System.out.println("ID: " + products[i].productId);
                System.out.println("Name: " + products[i].productName);
                System.out.println("Brand: " + products[i].brand);
                System.out.println("Price: Rs." + products[i].price);
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Product Not Found");
        }
    }
}