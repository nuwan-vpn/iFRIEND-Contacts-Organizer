-- Create the database
CREATE DATABASE IF NOT EXISTS contacts_db;

-- Use the newly created database
USE contacts_db;

-- Create the contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL,
    companyName VARCHAR(255) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    birthday DATE NOT NULL
);
