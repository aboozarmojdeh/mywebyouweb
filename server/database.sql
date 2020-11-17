CREATE DATABASE webyouwebdb;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email text UNIQUE NOT NULL,
    joined_date TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);

CREATE TABLE questions (
    question_id SERIAL PRIMARY KEY,
    email text NOT NULL,
    question VARCHAR(255),
    answer VARCHAR(255),
    answered_date TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);