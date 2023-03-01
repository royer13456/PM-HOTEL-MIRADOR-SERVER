CREATE DATABASE hotel_torre_torre;

USE hotel_torre_torre;

CREATE TABLE
    room(
        id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        image_url TEXT,
        title VARCHAR(200),
        price DECIMAL(7, 2),
        description TEXT,
        visible TINYINT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

DESCRIBE room ;