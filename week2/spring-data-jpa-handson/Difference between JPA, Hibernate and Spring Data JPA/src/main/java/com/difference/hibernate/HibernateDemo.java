package com.difference.hibernate;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.hibernate.Session;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import com.difference.entity.Book;

@Component
public class HibernateDemo {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void runDemo() {
        Session session = entityManager.unwrap(Session.class);
        Book book = new Book("Hibernate Framework Book", "Hibernate Engine");
        session.persist(book);
        Book found = session.get(Book.class, book.getId());
        System.out.println("Hibernate Session retrieved: " + found.getTitle());
    }
}
