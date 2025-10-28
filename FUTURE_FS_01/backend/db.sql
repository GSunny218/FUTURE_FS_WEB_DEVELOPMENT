-- SQL to create database and contacts table
CREATE DATABASE IF NOT EXISTS future_fs CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE future_fs;

CREATE TABLE IF NOT EXISTS contacts (
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
