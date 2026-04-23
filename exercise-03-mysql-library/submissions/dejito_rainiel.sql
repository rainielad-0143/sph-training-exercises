CREATE DATABASE library_db;

USE library_db;

CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author_name VARCHAR(100) NOT NULL
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

CREATE TABLE members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_name VARCHAR(100) NOT NULL
);

CREATE TABLE borrow_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL,
    book_id INT NOT NULL,
    borrow_date DATE NOT NULL,
    return_date DATE NULL,
    FOREIGN KEY (member_id) REFERENCES members(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO authors (author_name) VALUES
('Ali Hazelwood'),
('TurtleMe'),
('Shing-Shong'),
('Jee Gab Song');

INSERT INTO books (title, author_id) VALUES
('The Love Hypothesis', 1),
('Love on the Brain', 1),
('The Beginning After The End', 2),
('Omniscient Reader''s Viewpoint', 3),
('The World After The Fall', 3),
('The Novel''s Extra', 4);

INSERT INTO members (member_name) VALUES
('Adam'),
('Arthur'),
('Jaewan'),
('Dokja'),
('Joong-Hyuk');

INSERT INTO borrow_records (member_id, book_id, borrow_date, return_date) VALUES
(1, 1, '2026-04-01', '2026-04-10'),
(4, 2, '2026-04-05', '2026-04-14'),
(2, 3, '2026-04-07', NULL),
(3, 5, '2026-04-09', NULL),
(5, 4, '2026-04-09', NULL),
(4, 6, '2026-04-09', NULL);

SELECT books.title, authors.author_name
FROM books
JOIN authors ON books.author_id = authors.id;

SELECT members.member_name, books.title, borrow_records.borrow_date
FROM borrow_records
JOIN members ON borrow_records.member_id = members.id
JOIN books ON borrow_records.book_id = books.id
WHERE borrow_records.return_date IS NULL;

SELECT DISTINCT members.member_name
FROM borrow_records
JOIN members ON borrow_records.member_id = members.id
JOIN books ON borrow_records.book_id = books.id
JOIN authors ON books.author_id = authors.id
WHERE authors.author_name = 'Ali Hazelwood';

SELECT authors.author_name, COUNT(books.id) AS total_books
FROM authors
LEFT JOIN books ON books.author_id = authors.id
GROUP BY authors.id, authors.author_name;

SELECT members.member_name, books.title, borrow_records.borrow_date, borrow_records.return_date
FROM borrow_records
JOIN members ON borrow_records.member_id = members.id
JOIN books ON borrow_records.book_id = books.id
WHERE members.member_name = 'Dokja'
ORDER BY borrow_records.borrow_date;
