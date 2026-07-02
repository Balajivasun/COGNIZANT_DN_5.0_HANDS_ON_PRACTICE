package com.difference;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.difference.jpa.JpaDemo;
import com.difference.hibernate.HibernateDemo;
import com.difference.repository.BookRepository;
import com.difference.entity.Book;

@SpringBootApplication
public class DifferenceApplication {
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(DifferenceApplication.class, args);

        JpaDemo jpaDemo = context.getBean(JpaDemo.class);
        jpaDemo.runDemo();

        HibernateDemo hibernateDemo = context.getBean(HibernateDemo.class);
        hibernateDemo.runDemo();

        BookRepository repository = context.getBean(BookRepository.class);
        Book book = new Book("Spring Data Repository Book", "Spring Data Abstraction");
        repository.save(book);
        Book found = repository.findById(book.getId()).orElse(null);
        if (found != null) {
            System.out.println("Spring Data Repository retrieved: " + found.getTitle());
        }
    }
}
