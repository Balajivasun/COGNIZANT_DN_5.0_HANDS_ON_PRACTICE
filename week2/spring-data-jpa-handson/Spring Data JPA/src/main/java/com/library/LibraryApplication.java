package com.library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.library.entity.Book;
import com.library.repository.BookRepository;

@SpringBootApplication
public class LibraryApplication {
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(LibraryApplication.class, args);
        BookRepository repository = context.getBean(BookRepository.class);
        Book book = new Book("Spring Boot in Action", "Craig Walls");
        repository.save(book);
        repository.findAll().forEach(b -> System.out.println("Retrieved Book: " + b.getTitle() + " by " + b.getAuthor()));
    }
}
