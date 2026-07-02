package com.difference.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.difference.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
