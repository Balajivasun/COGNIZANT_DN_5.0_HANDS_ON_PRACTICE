package org.example;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.text.SimpleDateFormat;
import java.util.Date;
public class SpringLearnApplication {
    public static void main(String[] args) {
        displayDate();
    }
    public static void displayDate() {
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        System.out.println("Spring Rest Hands On :  ");
        System.out.println();
        SimpleDateFormat format =
                context.getBean("dateFormat", SimpleDateFormat.class);
        try {
            Date date = format.parse("31/12/2018");
            System.out.println(date);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}