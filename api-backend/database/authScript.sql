-- Create the database
CREATE DATABASE IF NOT EXISTS auth;
USE auth;



-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    email_verified_at TIMESTAMP NULL DEFAULT NULL,
    password VARCHAR(255) NOT NULL,
    remember_token VARCHAR(100) NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS JobSeeker (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT NULL,
    resume_link VARCHAR(255) NULL, -- URL to resume if uploaded
    skills TEXT NULL, -- List of skills
    experience TEXT NULL, -- Work experience details
    education TEXT NULL, -- Educational qualifications
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS Resume (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    job_seeker_id BIGINT NOT NULL,
    resume_link VARCHAR(255) NOT NULL, 
    summary TEXT NULL, 
    skills TEXT NULL, 
    experience TEXT NULL,
    education TEXT NULL, 
    certifications TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (job_seeker_id) REFERENCES JobSeeker(id) ON DELETE CASCADE
);

INSERT INTO JobSeeker (fullname, email, phone, address, skills, experience, education)
VALUES 
('Alice Johnson', 'alice@gmail.com', '9876543210', '456 Park Ave, CA', 'Python, Django, Machine Learning', '3 years as a Data Scientist', 'M.Sc. in Computer Science'),
('Michael Smith', 'michael@gmail.com', '1122334455', '789 Elm St, TX', 'Java, Spring Boot, Microservices', '5 years as a Software Engineer', 'B.Tech in Information Technology'),
('Sophia Williams', 'sophia@gmail.com', '2233445566', '102 Greenway Rd, NY', 'React, Node.js, UI/UX', '2 years as a Frontend Developer', 'B.Sc. in Computer Science');

INSERT INTO Resume (job_seeker_id, resume_link, summary, skills, experience, education, certifications)
VALUES 
(1, 'https://example.com/resume/alice.pdf', 'Data Scientist with expertise in AI', 'Python, Django, Machine Learning', 'Worked at XYZ Corp for 3 years', 'M.Sc. in Computer Science', 'Certified AI Specialist'),
(2, 'https://example.com/resume/michael.pdf', 'Backend Developer with Microservices expertise', 'Java, Spring Boot, Microservices', 'Worked at ABC Ltd for 5 years', 'B.Tech in Information Technology', 'AWS Certified Developer'),
(3, 'https://example.com/resume/sophia.pdf', 'Frontend Developer with UI/UX expertise', 'React, Node.js, UI/UX', 'Worked at DEF Inc for 2 years', 'B.Sc. in Computer Science', 'Certified UI/UX Designer');

-- Create the password_resets table
CREATE TABLE IF NOT EXISTS password_resets (
    email VARCHAR(255) PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT NULL
);



-- Create the failed_jobs table
CREATE TABLE IF NOT EXISTS failed_jobs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(255) UNIQUE NOT NULL,
    connection TEXT NOT NULL,
    queue TEXT NOT NULL,
    payload LONGTEXT NOT NULL,
    exception LONGTEXT NOT NULL,
    failed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




-- Create the personal_access_tokens table
CREATE TABLE IF NOT EXISTS personal_access_tokens (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    tokenable_type VARCHAR(255) NOT NULL,
    tokenable_id BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    token VARCHAR(64) UNIQUE NOT NULL,
    abilities TEXT NULL,
    last_used_at TIMESTAMP NULL DEFAULT NULL,
    expires_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);




-- Create the login table
CREATE TABLE IF NOT EXISTS login (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    RegisterId VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);




-- Create the signups table
CREATE TABLE IF NOT EXISTS signups (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- Store hashed passwords
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);






-- Create the post_jobs table
CREATE TABLE IF NOT EXISTS post_jobs (
     job_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
     description VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
     salary VARCHAR(255) NOT NULL ,
    grade VARCHAR(255) NOT NULL,
    posted_on DATE NOT NULL,
    deadline DATE NOT NULL,
    application_mode VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS post (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    grade VARCHAR(255) NOT NULL,
    posted_on DATE NOT NULL,
    deadline DATE NOT NULL,
    application_mode VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS pp (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    grade VARCHAR(255) NOT NULL,
    posted_on DATE NOT NULL,
    deadline DATE NOT NULL,
    application_mode VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS Job (
   
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    application_start_date date not null,
     application_end_date date not null,
     salary int not null;
    
);
DROP TABLE IF EXISTS pp;
INSERT INTO signups (fullname, email, password)
VALUES 
('Michael Brown', 'michael@example.com', SHA2('signup123', 256)),
('Emily Davis', 'emily@example.com', SHA2('letmein', 256)),
('David Wilson', 'david@example.com', SHA2('password2024', 256)),
('Sophia Martinez', 'sophia@example.com', SHA2('qwerty', 256));


INSERT INTO users (name, email, password, remember_token)
VALUES 
('John Doe', 'john@example.com', SHA2('password123', 256), NULL),
('Jane Smith', 'jane@example.com', SHA2('securepass', 256), NULL),
('Alice Johnson', 'alice@example.com', SHA2('mypassword', 256), NULL),
('Bob Williams', 'bob@example.com', SHA2('12345678', 256), NULL);

-- Drop tables if needed 
-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS password_resets;
-- DROP TABLE IF EXISTS failed_jobs;
-- DROP TABLE IF EXISTS personal_access_tokens;
-- DROP TABLE IF EXISTS login;
-- DROP TABLE IF EXISTS signups;
-- DROP TABLE IF EXISTS post_jobs;
