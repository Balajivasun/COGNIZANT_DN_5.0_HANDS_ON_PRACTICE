package com.difference.jpa;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import com.difference.entity.Book;

@Component
public class JpaDemo {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void runDemo() {
        Book book = new Book("JPA Specification Book", "JPA Standard");
        entityManager.persist(book);
        Book found = entityManager.find(Book.class, book.getId());
        System.out.println("JPA EntityManager retrieved: " + found.getTitle());
    }
}
